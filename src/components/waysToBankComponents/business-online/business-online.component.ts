import { Component } from '@angular/core';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { CommonModule } from '@angular/common';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { PagePromoCardComponent } from '../../generic-components/page-promo-card/page-promo-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-business-online',
  imports: [
    CommonModule,
    RouterLink,
    PageIntroComponent,
    ImageHeadingCardComponent,
    DynamicSwiperComponent,
    FeaturedCardComponent,
    TabListComponent,
    PagePromoCardComponent,
  ],
  templateUrl: './business-online.component.html',
  styleUrl: './business-online.component.scss'
})
export class BusinessOnlineComponent {
  promoCardData = {
    title: '',
    description: 'Manage all your enterprise banking on this standalone, secure platform. From simple transactions and transfers, to local and cross-border trade deals and forex payments, you have full control over how you handle your finances.',
    imageSrc: 'assets/images/media/business-online-promo.jpg',
    imageAlt: 'Online Banking Platform',
    storeImages: [],
    outlineBtnVisible: true,
    outlineBtnText: 'SIGN IN',
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
      title: 'World-class security',
      description:
        'Your information is protected through encryption that complies with global standards',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Full-service banking',
      description:
        'Set up the services you need and reduce your reliance on bank or call centre assistance',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Access control',
      description:
        'Manage user access that limits transactions according to roles in your organisation',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Improve cash management',
      description:
        'Optimise all your cash flow with a single view of all accounts and positions',
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
      title: 'Mobile app banking',
      description:
        'Manage your accounts and limits, make payments and send money safely on your smartphone or tablet',
      imageSrc: 'assets/images/media/vans.jpg',
      imageAlt: 'Mobile app banking',
      buttonLabel: 'TELL ME MORE',
      buttonLink: '#',
    },
    {
      title: 'ATM banking',
      description:
        'Pay your bills and change your overdraft limit without visiting a branch, and make cash or cheque deposits outside of normal banking hours',
      imageSrc: 'assets/images/media/vans.jpg',
      imageAlt: 'ATM banking',
      buttonLabel: 'TELL ME MORE',
      buttonLink: '#',
    },
  ];
}
