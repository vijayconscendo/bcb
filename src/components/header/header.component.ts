import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  

  // isDashboard to show hide items in header after login temp
  isDashboard = false;
  constructor(private router: Router,private authService: AuthenticationService) {}
  // isDashboard End


  isBusinessSolutionsOpen = false;
  isSelfServiceToolsOpen = false;
  isSupportContactOpen = false;
  isMyProfileOpen = false;
  isMobileMenuOpen = false;
  mobileActiveMenu: string | null = null;
  windowWidth = 0; // Initialize without window reference

  ngOnInit() {
    // Safe reference to window in lifecycle hook
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth;
    }


    // isDashboard
    this.router.events.subscribe(() => {
      this.isDashboard = this.router.url.includes('/dashboard');
    });
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
    this.isBusinessSolutionsOpen = false;
    this.isSelfServiceToolsOpen = false;
    this.isSupportContactOpen = false;
    this.isMyProfileOpen = false;
  }

  // For desktop hover functionality
  toggleMenu(menu: string, isOpen: boolean) {
    if (this.windowWidth < 768) return; // Don't use hover on mobile
    
    this.closeAllMenus();
    switch (menu) {
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
    const credentials = {
      username: 'businessownership',
      password: 'Test@123'
    };

    this.authService.login(credentials)
      .pipe(
        finalize(() => {
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: error => {
        }
      });
  }
  onSignOut(): void {
    console.log('signout')
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
