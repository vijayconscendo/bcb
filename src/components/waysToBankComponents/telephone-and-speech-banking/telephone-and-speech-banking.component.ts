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
  selector: 'app-telephone-and-speech-banking',
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
  templateUrl: './telephone-and-speech-banking.component.html',
  styleUrl: './telephone-and-speech-banking.component.scss'
})
export class TelephoneAndSpeechBankingComponent {
promoCardData = {
    title: '',
    description: 'Bank from a fixed line or cellphone using our 24/7 automated service, or speak to a consultant during the week, over the weekend or on public holidays.',
    imageSrc: 'assets/images/media/telephone-banking-promo.jpg',
    imageAlt: 'Online Banking Platform',
    storeImages: [],
    outlineBtnVisible: false,
    outlineBtnText: 'REGISTER',
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
      title: 'Multilingual',
      description:
        'Choose to do your Speech Banking in English, Isizulu, or Afrikaans',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Easy to use',
      description:
        'Use your phone’s keypad or switch to speech and back when following the prompts',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Safe and secure',
      description:
        'Your unique card PIN protects you when you’re accessing your accounts and making payments',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Zero costs',
      description:
        'There are no sign-up or monthly subscription fees when you use our Telephone and Speech Banking service',
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
