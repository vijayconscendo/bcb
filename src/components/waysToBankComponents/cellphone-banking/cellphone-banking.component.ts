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
  selector: 'app-cellphone-banking',
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
  templateUrl: './cellphone-banking.component.html',
  styleUrl: './cellphone-banking.component.scss'
})
export class CellphoneBankingComponent {
  promoCardData = {
    title: '',
    description: 'Enjoy the convenience of anytime, anywhere banking from your phone, with free inter-account transfers, payments and pre-paid top-ups.',
    imageSrc: 'assets/images/media/cellphone-banking-promo.jpg',
    imageAlt: 'Cellphone Banking',
    storeImages: [],
    outlineBtnVisible: false,
    outlineBtnText: 'REGISTER',
    outlineBtnLink: '/auth/register',
    primaryBtnVisible: false,
    primaryBtnText: '',
    primaryBtnLink: ''
  };
  
  imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Convenient banking',
      description:
        'Enjoy 24/7 banking on any cellphone - no smartphones or data needed',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Safe and secure',
      description:
        'Your bank account is protected even if your phone gets stolen',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Easy top-ups',
      description:
        'Top up your cellphone even if you don’t have airtime or data by dialling *130*2345#',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'UCount Rewards',
      description:
        'Earn up to 50 Rewards Points if you’re a UCount member by making three transactions a month',
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
      title: 'Mobile app banking',
      description:
        'Manage your accounts and limits, make payments and send money safely on your smartphone or tablet',
      imageSrc: 'assets/images/media/vans.jpg',
      imageAlt: 'Mobile app banking',
      buttonLabel: 'TELL ME MORE',
      buttonLink: '#',
    },
  ];
}
