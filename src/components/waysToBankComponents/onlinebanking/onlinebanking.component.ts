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
  selector: 'app-onlinebanking',
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
  templateUrl: './onlinebanking.component.html',
  styleUrl: './onlinebanking.component.scss',
})
export class OnlinebankingComponent {  
  promoCardData = {
    title: '',
    description: 'Create your online profile to unlock the full range of DIY banking features, and start managing your money from any device.',
    imageSrc: 'assets/images/media/online-banking-promo.jpg',
    imageAlt: 'Online Banking Platform',
    storeImages: [],
    outlineBtnVisible: true,
    outlineBtnText: 'REGISTER',
    outlineBtnLink: '/auth/register',
    primaryBtnVisible: true,
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
      title: 'Any device',
      description:
        'Access your Internet Banking profile on your smartphone, tablet, laptop or desktop',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Manage your accounts',
      description:
        'Change your payment limits, and manage your transactional accounts, loans and investments',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Convenient value-adds',
      description:
        'Pay your traffic fines, download and send bank statements, and buy airtime and data',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Security and control',
      description:
        'Stay protected with regular security updates and verify transactions using OTPs',
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
