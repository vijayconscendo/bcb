import { Component } from '@angular/core';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { CtaComponent } from '../../generic-components/cta/cta.component';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { UcountSecComponent } from '../../generic-components/ucount-sec/ucount-sec.component';
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';
import { PageIntroCardComponent } from '../../generic-components/page-intro-card/page-intro-card.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-my-mobiz-account',
  imports: [
    PageIntroComponent,
    BreadcrumbComponent,
    ImageHeadingCardComponent,
    TabListComponent,
    CtaComponent,
    DynamicSwiperComponent,
    UcountSecComponent,
    FeaturedCardComponent,
    PageIntroCardComponent
],
  templateUrl: './my-mobiz-account.component.html',
  styleUrl: './my-mobiz-account.component.scss',
})
export class MyMobizAccountComponent {
  imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Affordable banking',
      description:
        'Keep track of your business finances for as little as R7 a month',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Receive payments from your customers',
      description:
        'Accept card payments via PocketBiz and get funds deposited into your account on the same day',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Pay suppliers and staff',
      description:
        'Make payments on the go on your Banking App or Internet Banking',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Save towards a goal',
      description:
        'Choose an amount you want to save every month to reach your business goals and earn interest on your savings',
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

  featuredCardData = [
    {
      title: 'Restructure your vehicle financing',
      description:
        "Call us on 086 110 2347 during office hours to adjust your repayments. We'll give you a unique reference number to access our secure portal, where you can submit everything you need to complete your application.",
      imageSrc: 'assets/images/media/vans.jpg',
      imageAlt: 'card img',
      buttonLabel: 'go to portal',
      buttonLink: '#',
    },
    {
      title: 'Vehicle and asset insurance',
      description:
        'Safeguard the continuity of your business with an insurance solution that’s customised to your business operations',
      imageSrc: 'assets/images/media/vans.jpg',
      imageAlt: 'card img',
      buttonLabel: 'tell me more',
      buttonLink: '#',
    },
  ];

  ucountSteps = [
    {
      number: 1,
      title: 'JOIN',
      content:
        'Sign up for R 365 a year to collect Rewards Points, and activate your Business Rewards card to redeem them',
    },
    {
      number: 2,
      title: 'EARN',
      content:
        'Collect Rewards Points whenever you pay by credit, cheque or debit card',
    },
    {
      number: 3,
      title: 'SPEND',
      content:
        'Use your Business Rewards card to redeem points for fuel, office supplies or travel deals',
    },
  ];
}
