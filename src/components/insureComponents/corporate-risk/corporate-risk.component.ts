import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../generic-components/breadcrumb/breadcrumb.component";
import { PageIntroComponent } from "../../generic-components/page-intro/page-intro.component";
import { PagePromoCardComponent } from "../../generic-components/page-promo-card/page-promo-card.component";
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { TabListComponent } from './tab-list/tab-list.component';
import { DynamicSwiperComponent } from "../../generic-components/dynamic-swiper/dynamic-swiper.component";
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';

@Component({
  selector: 'app-corporate-risk',
  imports: [BreadcrumbComponent, PageIntroComponent, PagePromoCardComponent, ImageHeadingCardComponent, TabListComponent, DynamicSwiperComponent, FeaturedCardComponent],
  templateUrl: './corporate-risk.component.html',
  styleUrl: './corporate-risk.component.scss'
})
export class CorporateRiskComponent {

  promoCardData = {
    title: '',
    description: 'Put our expertise to work with all risks asset protection, analysis, mitigation advice and strategic claims management.',
    imageSrc: 'assets/images/media/atm-banking-promo.jpg',
    imageAlt: 'ATM Banking',
    storeImages: [],
    outlineBtnVisible: true,
    outlineBtnText: 'call me back',
    outlineBtnLink: '',
    primaryBtnVisible: false,
    primaryBtnText: '',
    primaryBtnLink: ''
  };

    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Analysis',
      description: 'Tap into our wealth of risk management and insurance intermediary services'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'All risks',
      description: 'Solve the major, complex risks you face with simple and practical cover'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Network resources',
      description: 'Have a single point of contact for access to all the resources of our network'
    },
  ];

  customBreakpoints1 = {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 16,
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
