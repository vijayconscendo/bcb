import { Component } from '@angular/core';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { CommonModule } from '@angular/common';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';
import { PagePromoCardComponent } from '../../generic-components/page-promo-card/page-promo-card.component';
import { RouterLink } from '@angular/router';
import { TabListComponent } from './tab-list/tab-list.component';

@Component({
  selector: 'app-mobile-app-banking',
  imports: [
    CommonModule,
    RouterLink,
    PageIntroComponent,
    ImageHeadingCardComponent,
    DynamicSwiperComponent,
    FeaturedCardComponent,
    PagePromoCardComponent,
    TabListComponent
  ],
  templateUrl: './mobile-app-banking.component.html',
  styleUrl: './mobile-app-banking.component.scss'
})
export class MobileAppBankingComponent {
  promoCardData = {
    title: '',
    description: 'Manage your accounts and limits, make payments and send money safely on your smartphone or tablet. Visit the app store to download the latest version of our app.',
    imageSrc: 'assets/images/media/mobile-app-promo.jpg',
    noteText: '*Network costs apply only to downloading the app',
    imageAlt: 'Mobile App Banking',    
    storeImages: [
      { src: 'assets/images/media/app-store.png', alt: 'App Store' },
      { src: 'assets/images/media/google-play.png', alt: 'Google Play' },
      { src: 'assets/images/media/app-gallery.png', alt: 'App Gallery' }
    ],
    outlineBtnVisible: false,
    outlineBtnText: 'REGISTER',
    outlineBtnLink: '/auth/register',
    primaryBtnVisible: false,
    primaryBtnText: 'SIGN IN',
    primaryBtnLink: '/auth/login'
  };
  
  imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Safe and secure',
      description:
        'Use your fingerprint or face recognition to sign in for more secure banking',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Convenience',
      description:
        'Make payments and transfers, check your balances, and manage your loans – all on the app',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Control your accounts',
      description:
        'Change your payment dates and card limits, stop and order cards, and open new savings accounts',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Get notified',
      description:
        'Receive instant push notifications on all your account activity and app updates that improve your banking experience',
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
      title: 'Online banking',
      description:
        'Create your online profile to unlock the full range of DIY banking features, and start managing your money from any device.',
      imageSrc: 'assets/images/media/vans.jpg',
      imageAlt: 'Online banking',
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
