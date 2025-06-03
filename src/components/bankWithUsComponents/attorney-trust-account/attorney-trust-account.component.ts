import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { PageIntroCardComponent } from "../../generic-components/page-intro-card/page-intro-card.component";
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { TabListComponent } from './tab-list/tab-list.component';
import { CardWithLinksComponent } from '../../generic-components/card-with-links/card-with-links.component';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';

@Component({
  selector: 'app-attorney-trust-account',
  imports: [BreadcrumbComponent, PageIntroComponent, PageIntroCardComponent, PageIntroCardComponent, ImageHeadingCardComponent, TabListComponent,DynamicSwiperComponent , CardWithLinksComponent, FeaturedCardComponent],
  templateUrl: './attorney-trust-account.component.html',
  styleUrl: './attorney-trust-account.component.scss'
})
export class AttorneyTrustAccountComponent {

    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Sweeping facility',
      description: 'Enable this facility to automatically transfer net interest to any law society account'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Compliance',
      description: 'Meet all Attorneys Fidelity Fund and law society guidelines'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Convenience',
      description: 'Make cheque or secure electronic payments with ease'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Growth',
      description: 'Earn interest on positive balances'
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
    slidesPerView: 3,
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
    slidesPerView: 2,
    spaceBetween: 32,
  },
}


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

featuredCardData = [
  {
    title: 'Third-Party Fund Administration',
    description: "Manage funds for multiple accounts from a single bank account that offers competitive rates on term deposits, top-notch security and automated facilities",
    imageSrc: 'assets/images/media/vans.jpg',
    imageAlt: "card img",
    buttonLabel: 'tell me more',
    buttonLink: '#'
  },
  {
    title: 'Owner-occupied property financing',
    description: 'Eliminate rental escalations with your own appreciating asset',
    imageSrc: 'assets/images/media/vans.jpg',
    imageAlt: 'card img',
    buttonLabel: 'tell me more',
    buttonLink: '#'
  },
];

}
