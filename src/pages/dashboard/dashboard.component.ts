import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WelcomeUserBannerComponent } from '../../components/welcome-user-banner/welcome-user-banner.component';
import { MySolutioncardsComponent } from "../../components/my-solutioncards/my-solutioncards.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HistoryStatementsComponent } from '../../components/history-statements/history-statements.component';
import { ExchangeRateComponent } from '../../components/exchange-rate/exchange-rate.component';
import { DigitalhubPushSliderComponent } from '../../components/digitalhub-push-slider/digitalhub-push-slider.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, WelcomeUserBannerComponent, MySolutioncardsComponent, HistoryStatementsComponent, ExchangeRateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  isChatwidgetOpen = false; 

  toggleIsisChatwidget() {
    this.isChatwidgetOpen = !this.isChatwidgetOpen;
  }


  isContactWidget = false;

  toggleContactWidget() {
    this.isContactWidget = !this.isContactWidget;
  }


}
