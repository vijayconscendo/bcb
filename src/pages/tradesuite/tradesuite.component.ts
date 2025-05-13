import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BenifitCardsComponent } from '../../components/tradesuite-view/benifit-cards/benifit-cards.component';
import { TabsWithListComponent } from '../../components/tradesuite-view/tabs-with-list/tabs-with-list.component';
import { OfferSliderComponent } from '../../components/tradesuite-view/offer-slider/offer-slider.component';

@Component({
  selector: 'app-tradesuite',
  imports: [CommonModule, RouterLink, BenifitCardsComponent, TabsWithListComponent, OfferSliderComponent],
  templateUrl: './tradesuite.component.html',
  styleUrl: './tradesuite.component.scss'
})
export class TradesuiteComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
