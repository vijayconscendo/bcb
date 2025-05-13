import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OfferSliderComponent } from '../../components/tradesuite-view/offer-slider/offer-slider.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FaqComponent } from '../../components/business-banking/faq/faq.component';

@Component({
  selector: 'app-online-banking-for-business',
  imports: [CommonModule, OfferSliderComponent, FaqComponent],
  templateUrl: './online-banking-for-business.component.html',
  styleUrl: './online-banking-for-business.component.scss'
})
export class OnlineBankingForBusinessComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
