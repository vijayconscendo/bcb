import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isBusinessSolutionsOpen = false;
  isSelfServiceToolsOpen = false;
  isSupportContactOpen = false;
  isMobileMenuOpen = false;
  mobileActiveMenu: string | null = null;
  windowWidth = 0; // Initialize without window reference

  ngOnInit() {
    // Safe reference to window in lifecycle hook
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth;
    }
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
    }
  }
}
