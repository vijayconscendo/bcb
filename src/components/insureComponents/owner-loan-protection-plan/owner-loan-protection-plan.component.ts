import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { PagePromoCardComponent } from '../../generic-components/page-promo-card/page-promo-card.component';
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';

import { DynamicSwiperComponent } from "../../generic-components/dynamic-swiper/dynamic-swiper.component";
import { FeaturedCardComponent } from "../../generic-components/featured-card/featured-card.component";
import { TabListComponent } from './tab-list/tab-list.component';

@Component({
  selector: 'app-owner-loan-protection-plan',
  imports: [BreadcrumbComponent, PageIntroComponent, PagePromoCardComponent, ImageHeadingCardComponent, TabListComponent, DynamicSwiperComponent, FeaturedCardComponent],
  templateUrl: './owner-loan-protection-plan.component.html',
  styleUrl: './owner-loan-protection-plan.component.scss'
})
export class OwnerLoanProtectionPlanComponent {

  promoCardData = {
    title: '',
    description: 'Have a Standard Bank Business Loan, Overdraft or Revolving Credit Plan? Insure your outstanding balance with an Owner Loan Protection Plan.Contact your business banker for more info.',
    imageSrc: 'assets/images/media/atm-banking-promo.jpg',
    imageAlt: 'ATM Banking',
    storeImages: [],
    outlineBtnVisible: false,
    outlineBtnText: '',
    outlineBtnLink: '',
    primaryBtnVisible: false,
    primaryBtnText: '',
    primaryBtnLink: ''
  };

      imageHeadingCardsData: ImageHeadingCard[] = [
      {
        imageUrl: 'assets/images/icons/dummy-shield.png',
        title: 'Reducing premiums',
        description: 'Pay less every month as your outstanding balance reduces'
      },
      {
        imageUrl: 'assets/images/icons/dummy-shield.png',
        title: 'Full settlement',
        description: 'Settle your outstanding balance in the event of death, dread disease, or permanent disability'
      },
      {
        imageUrl: 'assets/images/icons/dummy-shield.png',
        title: 'Additional Benefit',
        description: 'Get an Additional Benefit of R20 000 when you claim regardless of your outstanding balance in the event of death, permanent disability or dread disease'
      },

    ];

customBreakpoints1 = {
    640: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 24,
  },
  1440: {
    slidesPerView: 2,
    spaceBetween: 32,
  },
}
    
featuredCardData = [
  {
    title: 'Third-Party Fund Administration',
    description: "Manage funds for multiple accounts from a single bank account that offers competitive rates on term deposits, top-notch security and automated facilities",
    imageSrc: 'assets/images/media/vans.jpg',
    imageAlt: "card img",
    buttonLabel: 'tell me more',
    buttonLink: '#'
  },
  {
    title: 'Owner-occupied property financing',
    description: 'Eliminate rental escalations with your own appreciating asset',
    imageSrc: 'assets/images/media/vans.jpg',
    imageAlt: 'card img',
    buttonLabel: 'tell me more',
    buttonLink: '#'
  },
];

}
