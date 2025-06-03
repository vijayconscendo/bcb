import { Component } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { InlineImageTextCardComponent } from '../../generic-components/inline-image-text-card/inline-image-text-card.component';

@Component({
  selector: 'app-foreign-exchange',
  imports: [PageBannerComponent, BreadcrumbComponent, PageIntroComponent, ImageHeadingCardComponent, InlineImageTextCardComponent],
  templateUrl: './foreign-exchange.component.html',
  styleUrl: './foreign-exchange.component.scss'
})
export class ForeignExchangeComponent {
    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Convenience',
      description: 'Get live exchange rates 24/7 and make foreign currency payments with ease'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Confidence',
      description: 'Buy and sell forex at the most competitive rates'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Peace of mind',
      description: 'Benefit from our currency hedging solutions and manage exchange rate and business performance risk'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Optimised trade',
      description: 'Manage risks arising from international trade related products'
    }
  ];
}
