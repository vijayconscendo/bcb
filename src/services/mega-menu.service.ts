import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MegaMenuService {

  private megaMenuState = new BehaviorSubject<string | null>(null);
  megaMenuState$ = this.megaMenuState.asObservable();

  private mobileMenuOpen = new BehaviorSubject<boolean>(false);
  mobileMenuOpen$ = this.mobileMenuOpen.asObservable();

  toggleMegaMenu(menuId: string | null) {
    const currentMenu = this.megaMenuState.value;
    // If the same menu is toggled, close it, otherwise open the new one
    this.megaMenuState.next(currentMenu === menuId ? null : menuId);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.next(!this.mobileMenuOpen.value);
  }

  openMobileMenu() {
    this.mobileMenuOpen.next(true);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.next(false);
  }
  
  // New method to check if mobile menu is open
  isMobileMenuOpen(): boolean {
    return this.mobileMenuOpen.value;
  }

}
