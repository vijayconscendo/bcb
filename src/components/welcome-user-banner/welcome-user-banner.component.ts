import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-user-banner',
  imports: [CommonModule],
  templateUrl: './welcome-user-banner.component.html',
  styleUrl: './welcome-user-banner.component.scss'
})
export class WelcomeUserBannerComponent {
  isVisibleUserBanner = true;

  hideisVisibleUserBanner() {
    this.isVisibleUserBanner = false;
  }

}
