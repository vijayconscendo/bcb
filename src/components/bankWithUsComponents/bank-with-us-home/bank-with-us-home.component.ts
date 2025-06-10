import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { CallAndExploreComponent } from '../../generic-components/call-and-explore/call-and-explore.component';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { CardWithLinksComponent } from '../../generic-components/card-with-links/card-with-links.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { UcountSecComponent } from '../../generic-components/ucount-sec/ucount-sec.component';

@Component({
  selector: 'app-bank-with-us-home',
  imports: [
    CommonModule,
    BreadcrumbComponent,
    PageBannerComponent,
    PageIntroComponent,
    CallAndExploreComponent,
    DynamicSwiperComponent,
    CardWithLinksComponent,
    ImageHeadingCardComponent,
    UcountSecComponent,
  ],
  templateUrl: './bank-with-us-home.component.html',
  styleUrl: './bank-with-us-home.component.scss',
})
export class BankWithUsHomeComponent {
  customBreakpoints = {
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
  };

  imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Smooth and simplified switch',
      description:
        'Experience a smooth bank switch and let us close your old business account, move your balances and switch your payment and debit orders',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Smooth and simplified switch',
      description:
        'Experience a smooth bank switch and let us close your old business account, move your balances and switch your payment and debit orders',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Smooth and simplified switch',
      description:
        'Experience a smooth bank switch and let us close your old business account, move your balances and switch your payment and debit orders',
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Smooth and simplified switch',
      description:
        'Experience a smooth bank switch and let us close your old business account, move your balances and switch your payment and debit orders',
    },
  ];

  cardLinks = [
    {
      title: 'Getting Started',
      description: 'Learn to make the most of your new card.',
      links: [
        { label: 'My Updates', url: '#' },
        { label: 'Link your card to your online banking profile', url: '#' },
        { label: 'Get or change your PIN', url: '#' },
      ],
    },
    {
      title: 'Security Tips',
      description: 'Keep your card and banking information secure.',
      links: [
        { label: 'How to report fraud', url: '#' },
        { label: 'Set card limits', url: '#' },
      ],
    },
    {
      title: 'Benefits',
      description: 'Make the most out of your card rewards.',
      links: [
        { label: 'View your reward points', url: '#' },
        { label: 'Redeem rewards', url: '#' },
      ],
    },
    {
      title: 'Security Tips',
      description: 'Keep your card and banking information secure.',
      links: [
        { label: 'How to report fraud', url: '#' },
        { label: 'Set card limits', url: '#' },
      ],
    },
    {
      title: 'Benefits',
      description: 'Make the most out of your card rewards.',
      links: [
        { label: 'View your reward points', url: '#' },
        { label: 'Redeem rewards', url: '#' },
      ],
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
