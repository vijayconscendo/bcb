import { CommonModule,Location } from '@angular/common';
import { Component, HostListener,inject  } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { finalize,take,filter  } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  private document = inject(DOCUMENT);

  // isDashboard to show hide items in header after login temp
  isDashboard = false;
  constructor(private router: Router,private authService: AuthenticationService,private route: ActivatedRoute,private location: Location) {
  }
  // isDashboard End


  isTransactOpen = false;
  isBusinessSolutionsOpen = false;
  isSelfServiceToolsOpen = false;
  isSupportContactOpen = false;
  isMyProfileOpen = false;
  isMobileMenuOpen = false;
  mobileActiveMenu: string | null = null;
  windowWidth = 0; // Initialize without window reference
  firstName:any;
  
  ngOnInit() {
    // Safe reference to window in lifecycle hook
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth;
    }    

      this.checkIfDashboard();
      // this.location.onUrlChange((url: string) => {
      //   console.log('URL changed to:', url);
      //   this.isDashboard = url.includes('/dashboard');
      //   console.log('isDashboard', this.isDashboard);
      // });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects;
          console.log('URL changed to:', url);
          this.isDashboard = url.startsWith('/dashboard');
          console.log('isDashboard', this.isDashboard);
        }
      });
   
    this.route.queryParams.subscribe(params => {
      console.log('paramsccc',localStorage.getItem('accessToken'))
      if(params['code'] && !localStorage.getItem('accessToken')){
         this.authService.login(params['code'])
      .pipe(
        finalize(() => {
        })
      )
      .subscribe({
        next: (res) => {
          this.loadUserProfile();
        },
        error: error => {
        }
      });
      } else if(localStorage.getItem('accessToken')){
        this.loadUserProfile();
      }
    });
  
  
  }
  checkIfDashboard() {
    const currentUrl = this.location.path();
    console.log('Current path:', currentUrl);
    this.isDashboard = currentUrl.includes('/dashboard');
    console.log('isDashboard', this.isDashboard);
  }
  loadUserProfile(){
    this.authService.getUserInfo().subscribe(res=>{
      console.log('data',res)
      this.firstName = res?.first_name;
    })
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth;
      // Close dropdowns when resizing to avoid UI issues
      this.closeAllMenus();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.mobileActiveMenu = null;
    }
  }

  toggleMobileSubmenu(menu: string) {
    this.mobileActiveMenu = this.mobileActiveMenu === menu ? null : menu;
  }

  closeAllMenus() {
    this.isTransactOpen = false;
    this.isBusinessSolutionsOpen = false;
    this.isSelfServiceToolsOpen = false;
    this.isSupportContactOpen = false;
    this.isMyProfileOpen = false;
  }

  // For desktop hover functionality
  toggleMenu(menu: string, isOpen: boolean) {
    if (this.windowWidth < 1200) return; // Don't use hover on mobile
    
    this.closeAllMenus();
    switch (menu) {
      case 'transact':
        this.isTransactOpen = isOpen;
        break;
      case 'business':
        this.isBusinessSolutionsOpen = isOpen;
        break;
      case 'selfService':
        this.isSelfServiceToolsOpen = isOpen;
        break;
      case 'support':
        this.isSupportContactOpen = isOpen;
        break;
      case 'profile':
        this.isMyProfileOpen = isOpen;
        break;
    }
  }
  onSignIn(): void {
    console.log('signin')
    // window.location.href = 'https://enterprisestssit.standardbank.co.za/as/authorization.oauth2' + ;
    const baseUrl = 'https://enterprisestssit.standardbank.co.za/as/authorization.oauth2';
    const urlParam = "https://localhost:3000";


    // const url = `${baseUrl}?client_id=257f066d-ff65-4c4a-a311-ff63d6b6b9f2&response_type=code&scope=openid email profile&redirect_uri=${urlParam}&code_challenge=BizDLiK37qEpIiwtINOs8dPRp_FYidVvxm1Mo7VgSE4&code_challenge_method=S256&nonce=xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&state=xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
    // Parameters
    const url = 'https://enterprisestssit.standardbank.co.za/as/authorization.oauth2?client_id=257f066d-ff65-4c4a-a311-ff63d6b6b9f2&response_type=code&scope=openid email profile&redirect_uri=http://localhost:3000/dashboard&code_challenge=BizDLiK37qEpIiwtINOs8dPRp_FYidVvxm1Mo7VgSE4&code_challenge_method=S256&nonce=xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&state=xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    // const params = new URLSearchParams();
    // params.append('client_id', '257f066d-ff65-4c4a-a311-ff63d6b6b9f2');
    // params.append('response_type', 'code');
    // params.append('scope', 'openid email profile');
    // params.append('redirect_uri', urlParam);
    // params.append('code_challenge', 'BizDLiK37qEpIiwtINOs8dPRp_FYidVvxm1Mo7VgSE4');
    // params.append('code_challenge_method', 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
    // params.append('state', 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
    
    // Construct final URL with parameters
  
    // const url = `${baseUrl}?${params}`;
    // const encodedUrl = url.replace(/ /g, "%20");
    // console.log('ddd',url)
    console.log('url',url)

    window.open(url, "_self");
    // window.open(url, '_blank', 'noopener,noreferrer');
    // window.open(encodeURI(url), "_blank");
    // window.location.href = url;
    // window.open(url, '_self');
    // Navigate
    // window.location.href = url;
    // const credentials = {
    //   username: 'businessownership',
    //   password: 'Test@123'
    // };

    // this.authService.login(credentials)
    //   .pipe(
    //     finalize(() => {
    //     })
    //   )
    //   .subscribe({
    //     next: () => {
    //       this.router.navigate(['/dashboard']);
    //     },
    //     error: error => {
    //     }
    //   });
  }
  onSignOut(): void {
    console.log('signout')
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
