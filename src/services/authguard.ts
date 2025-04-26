import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

/**
 * Route guard function that checks if the user is authenticated
 * and redirects to login if they are not
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  
  if (authService.isLoggedIn()) {
    return true;
  }
  
  // Redirect to login page with the return url
  router.navigate(['/'], {
    queryParams: { returnUrl: state.url }
  });
  
  return false;
};


