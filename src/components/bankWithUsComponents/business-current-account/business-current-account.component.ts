import { Component } from '@angular/core';
import { PageIntroCardComponent } from '../../generic-components/page-intro-card/page-intro-card.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../generic-components/cta/cta.component';
import { DynamicSwiperComponent } from "../../generic-components/dynamic-swiper/dynamic-swiper.component";
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';
import { UcountSecComponent } from '../../generic-components/ucount-sec/ucount-sec.component';
import { CardWithLinksComponent } from '../../generic-components/card-with-links/card-with-links.component';
import { TextImageCardComponent } from '../../generic-components/text-image-card/text-image-card.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-business-current-account',
  imports: [
    CommonModule,
    BreadcrumbComponent,
    PageIntroCardComponent,
    PageIntroComponent,
    ImageHeadingCardComponent,
    CtaComponent,
    DynamicSwiperComponent,
    FeaturedCardComponent,
    UcountSecComponent,
    CardWithLinksComponent,
    TextImageCardComponent,
    TabListComponent
],
  templateUrl: './business-current-account.component.html',
  styleUrl: './business-current-account.component.scss'
})
export class BusinessCurrentAccountComponent {
    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Convenient payment solutions',
      description: 'Rely on fast, secure transactions, local or international, online or by card'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Expert help',
      description: 'Speak to experienced business bankers who specialise in your sector'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Online anytime',
      description: 'Manage your account, payments and collections whenever you need to'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Cross-border',
      description: 'Do your banking through our vast African network wherever you do business'
    }
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
}
  customBreakpoints1 = {
    640: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 24,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 32,
  },
}

featuredCardData = [
  {
    title: 'Business Overdraft',
    description: "Ideal as a short-term credit facility, you can access funds whenever you need it and only pay interest on the outstanding balance",
    imageSrc: 'assets/images/cards/business-overdraft.jpg',
    imageAlt: "card img",
    buttonLabel: 'tell me more',
    buttonLink: 'https://www.standardbank.co.za/southafrica/business/products-and-services/borrow-for-your-needs/business-loans/business-overdraft'
  },
  {
    title: 'Business Revolving credit plan',
    description: 'Open a line of business credit to use as working capital or bridging finance to expand your operations or make acquisitions',
    imageSrc: 'assets/images/cards/resolving-credit-plan.jpg',
    imageAlt: 'card img',
    buttonLabel: 'tell me more',
    buttonLink: 'https://www.standardbank.co.za/southafrica/business/products-and-services/borrow-for-your-needs/business-loans/revolving-credit-plan'
  },
];

  ucountSteps = [
    {
      number: 1,
      title: 'JOIN',
      content: 'Sign up for R 365 a year to collect Rewards Points, and activate your Business Rewards card to redeem them'
    },
    {
      number: 2,
      title: 'EARN',
      content: 'Collect Rewards Points whenever you pay by credit, cheque or debit card'
    },
    {
      number: 3,
      title: 'SPEND',
      content: 'Use your Business Rewards card to redeem points for fuel, office supplies or travel deals'
    }
  ];

cardLinks = [
  {
    title: 'Getting Started',
    description: 'Learn to make the most of your new card.',
    links: [
      { label: 'My Updates', url: '#' },
      { label: 'Link your card to your online banking profile', url: '#' },
      { label: 'Get or change your PIN', url: '#' }
    ]
  },
  {
    title: 'Managing your business',
    description: 'Get expert insights at BizConnect™',
    links: [
      { label: 'How to report fraud', url: '#' },
      { label: 'Set card limits', url: '#' }
    ]
  },
  {
    title: 'Benefits',
    description: 'Make the most out of your card rewards.',
    links: [
      { label: 'View your reward points', url: '#' },
      { label: 'Redeem rewards', url: '#' }
    ]
  },
    {
    title: 'Security Tips',
    description: 'Keep your card and banking information secure.',
    links: [
      { label: 'How to report fraud', url: '#' },
      { label: 'Set card limits', url: '#' }
    ]
  },
  {
    title: 'Benefits',
    description: 'Make the most out of your card rewards.',
    links: [
      { label: 'View your reward points', url: '#' },
      { label: 'Redeem rewards', url: '#' }
    ]
  }
];


}
