import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';
import { PagePromoCardComponent } from '../../generic-components/page-promo-card/page-promo-card.component';
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { TabListComponent } from './tab-list/tab-list.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { FaqComponent } from '../faq/faq.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { CtaComponent } from '../../generic-components/cta/cta.component';

@Component({
  selector: 'app-online-banking-for-business',
  imports: [
    CommonModule,
    PageIntroComponent,
    BreadcrumbComponent,
    PagePromoCardComponent,
    ImageHeadingCardComponent,
    DynamicSwiperComponent,
    FeaturedCardComponent,
    TabListComponent,
    GetInTouchComponent,
    CtaComponent,
    FaqComponent
],
  templateUrl: './online-banking-for-business.component.html',
  styleUrl: './online-banking-for-business.component.scss'
})
export class OnlineBankingForBusinessComponent {
 promoCardData = {
    title: '',
    description: "Go to the new platform and transform your business banking. Make payments and manage access and more with our new platform. You're only a few clicks away from streamlining your business.",
    imageSrc: 'assets/images/media/ob4b-promo.jpg',
    imageAlt: 'Online Banking Platform',
    storeImages: [],
    outlineBtnVisible: true,
    outlineBtnText: 'go to new platform',
    outlineBtnLink: '/auth/register',
    primaryBtnVisible: false,
    primaryBtnText: 'SIGN IN',
    primaryBtnLink: '/auth/login'
  };
  
  // Method to toggle store images for testing
  clearStoreImages() {
    this.promoCardData.storeImages = [];
  }
  
  imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Updated dashboard',
      description:
        'View your business accounts at a glance, and manage your finances easily',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Add employees',
      description:
        'Streamline your business by adding your employees to your business profile',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Access control',
      description:
        'Manage what access you give each employee on your business profile',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Spending safety',
      description:
        'Control spend by setting limits and approvals',
    },
  ];

  customBreakpoints = {
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
  };

  offerCardData = [
    {
      title: 'Business Online',
      description:
        'Manage all your enterprise banking on this standalone, secure platform. From simple transactions and transfers, to local and cross-border trade deals and forex payments, you have full control over how you handle your finances.',
      imageSrc: 'assets/images/media/vans.jpg',
      imageAlt: 'Business Online',
      buttonLabel: 'TELL ME MORE',
      buttonLink: '#',
    },
    {
      title: 'SnapScan for business',
      description:
        'Join the mobile payment revolution enabling customers to pay using their smartphones',
      imageSrc: 'assets/images/media/vans.jpg',
      imageAlt: 'SnapScan for business',
      buttonLabel: 'TELL ME MORE',
      buttonLink: '#',
    },
  ];
}
