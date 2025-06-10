import { Component } from '@angular/core';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { CommonModule } from '@angular/common';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';
import { PagePromoCardComponent } from '../../generic-components/page-promo-card/page-promo-card.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-atm-banking',
  imports: [
    CommonModule,
    PageIntroComponent,
    BreadcrumbComponent,
    ImageHeadingCardComponent,
    DynamicSwiperComponent,
    FeaturedCardComponent,
    PagePromoCardComponent,
    TabListComponent
  ],
  templateUrl: './atm-banking.component.html',
  styleUrl: './atm-banking.component.scss'
})
export class AtmBankingComponent {
  promoCardData = {
    title: '',
    description: 'Pay your bills and change your overdraft limit without visiting a branch, and make cash or cheque deposits outside of normal banking hours.',
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
      title: 'Buy and pay',
      description:
        'Pay your municipal bills, traffic fines and accounts; or buy airtime, data and electricity',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Make deposits',
      description:
        'Make cash deposits at AutoBank ATMs outside of normal banking hours',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Change limits',
      description:
        'Increase or decrease your Overdraft limit at your nearest AutoPlus ATM',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Manage accounts',
      description:
        'Manage up to three accounts you have with us once you have linked them in-branch',
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
