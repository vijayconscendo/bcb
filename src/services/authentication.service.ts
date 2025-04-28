import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { SafeStorageService } from './safe-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    private accessCodeUrl = 'https://enterprisestssit.standardbank.co.za/as/authorization.oauth2';
    private tokenUrl = 'https://enterprisestssit.standardbank.co.za/as/token.oauth2';
    private grant_type = environment?.auth?.grant_type;
    private redirect_uri = environment?.auth?.redirect_uri;
    private client_id = environment?.auth?.client_id;
    private code_verifier = environment?.auth?.code_verifier;
    private client_secret = environment?.auth?.client_secret;
    private response_type = environment?.auth?.response_type;
    private scope = environment?.auth?.scope;
    private code_challenge = environment?.auth?.code_challenge;
    private code_challenge_method = environment?.auth?.code_challenge_method;
    private nonce = environment?.auth?.nonce;
    private state = environment?.auth?.state;
  constructor(private http: HttpClient,
    private safeStorageService: SafeStorageService
  ) {}


  /**
   * Fetches an access code from the first API
   * @param credentials User credentials (may be ignored if provided in queryParams)
   * @param queryParams Optional query parameters to include in the request
   * @param useGetMethod Set to true to use GET instead of POST for the access code request
   * @returns Observable with the access code
   */
  getAccessCode(
  credentials: { username: string; password: string },
  queryParams?: Record<string, string>,
  useGetMethod = false
): Observable<{ accessCode: string }> {
  // Create HttpParams instance
  let httpParams = new HttpParams();
  
  // Add your OAuth parameters
  const params: { [key: string]: string } = {
    'client_id': this.client_id,
    'response_type': this.response_type,
    'scope': this.scope,
    'redirect_uri': this.redirect_uri,
    'state': this.state,
    'code_challenge': this.code_challenge,
    'code_challenge_method': this.code_challenge_method,
    'nonce': this.nonce,
    'pf.username':credentials.username,
    'pf.pass':credentials.password
  };
  
  // Append each parameter to the HttpParams object
  Object.keys(params).forEach(key => {
    httpParams = httpParams.set(key, params[key]);
  });
  
  // Make the GET request with the params object
  return this.http.get<{ accessCode: string }>(this.accessCodeUrl, { params: httpParams })
    .pipe(catchError(this.handleError));
}
  
  /**
   * Exchanges the access code for an access token via the second API
   * @param accessCode The access code received from the first API
   * @returns Observable with the access token and other auth data
   */
  getAccessToken(accessCode: string): Observable<{
    accessToken: string;
    refreshToken?: string;
    expiresIn?: number;
  }> {
    // Set up headers for token request
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.set('code', accessCode);
    body.set('grant_type', this.grant_type);
    body.set('client_id', this.client_id);
    body.set('code_verifier',this.code_verifier)
    body.set('redirect_uri', this.redirect_uri);
    body.set('client_secret', this.client_secret);
    
    return this.http.post<any>(this.tokenUrl, body.toString(), { headers })
      .pipe(
        map(response => ({
          accessToken: response.access_token || response.accessToken,
          refreshToken: response.refresh_token || response.refreshToken,
          expiresIn: response.expires_in || response.expiresIn
        })),
        tap(response => {
          this.safeStorageService.setItem('accessToken', response.accessToken);
          if (response.refreshToken) {
            this.safeStorageService.setItem('refreshToken', response.refreshToken);
          }
          if (response.expiresIn) {
            const expiresAt = new Date().getTime() + response.expiresIn * 1000;
            this.safeStorageService.setItem('expiresAt', expiresAt.toString());
          }
        }),
        catchError(this.handleError)
      );
  }
  
  /**
   * Logs in user using both APIs in sequence
   * @param credentials User credentials
   * @param queryParams Optional query parameters for the access code request
   * @param useGetMethod Set to true to use GET instead of POST for the access code request
   * @returns Observable with the final auth result
   */
  login(
    credentials: { username: string; password: string },
    queryParams?: Record<string, string>,
    useGetMethod = false
  ): Observable<any> {
    return new Observable(observer => {
    //   this.getAccessCode(credentials, queryParams, useGetMethod).subscribe({
    //     next: (codeResponse) => {
    //       console.log('codeResponse',codeResponse)
          this.getAccessToken('phn4XpFUgqJu2dDik5bGmlmVBFkI6Qn_IR4AAAAC').subscribe({         
            next: (tokenResponse) => {
                console.log('coderesponses....')
              observer.next(tokenResponse);
              observer.complete();
            },
            error: (error) => observer.error(error)
          });
    //    },
    //    error: (error) => observer.error(error)
    //   });
    });
  }
  
 /**
   * Checks if the user is logged in
   * @returns boolean indicating if the user is authenticated
   */
 isLoggedIn(): boolean {
    const token = this.safeStorageService.getItem('accessToken');
    const expiresAt = this.safeStorageService.getItem('expiresAt');
    
    if (!token) {
      return false;
    }
    
    if (expiresAt && new Date().getTime() > parseInt(expiresAt, 10)) {
      this.logout(); 
      return false;
    }
    
    return true;
  }
  
  /**
   * Returns the currently stored access token
   * @returns The access token string or null
   */
  getToken(): string | null {
    return this.safeStorageService.getItem('accessToken');
  }
  
  /**
   * Logs out the user by clearing stored tokens
   */
  logout(): void {
    this.safeStorageService.removeItem('accessToken');
    this.safeStorageService.removeItem('refreshToken');
    this.safeStorageService.removeItem('expiresAt');
  }
  
  /**
   * Error handler for HTTP requests
   * @param error The error response
   * @returns An observable error
   */
  private handleError(error: any): Observable<never> {
    console.error('Authentication error:', error);
    let errorMessage = 'An error occurred during authentication';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status) {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    return throwError(() => new Error(errorMessage));
  }
}