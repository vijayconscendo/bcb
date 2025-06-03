import { Component } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { CtaComponent } from '../../generic-components/cta/cta.component';
import { MymobizAccountCardComponent } from '../../generic-components/mymobiz-account-card/mymobiz-account-card.component';
import { CommonModule } from '@angular/common';
import { UcountSecComponent } from "../../generic-components/ucount-sec/ucount-sec.component";
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { CardWithLinksComponent } from '../../generic-components/card-with-links/card-with-links.component';

@Component({
  selector: 'app-our-cards',
  imports: [CommonModule, PageBannerComponent, BreadcrumbComponent, PageIntroComponent, ImageHeadingCardComponent, CtaComponent, MymobizAccountCardComponent, UcountSecComponent, DynamicSwiperComponent , CardWithLinksComponent],
  templateUrl: './our-cards.component.html',
  styleUrl: './our-cards.component.scss'
})
export class OurCardsComponent {

    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Globally accepted',
      description: 'Choose between a MasterCard or Visa Corporate Card depending on your needs'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Increased visibility on spend',
      description: 'Track and manage your company’s travel expenses or purchases more closely'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Interest-free',
      description: 'Enjoy interest-free credit if the minimum amount is settled on time'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Corporate liability waiver',
      description: 'Get automatic protection against card fraud or misuse'
    }
  ];


    bankingProducts = [
    {
      id: 1,
      title: 'MyMoBiz Account',
      description: 'Simple affordable banking for small businesses. Get everything you need to run your business with MyMoBiz. Manage your finances on the go and get dedicated support from a team of business bankers. Apply for your business account today and set your business up for success.',
      price: '9',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: 'Pay as you transact',
      featured: true,
      category: 'Flexible',
      accountCardImg: 'assets/images/media/account-card.png',
    },
    {
      id: 2,
      title: 'MyMoBiz Plus Account',
      description: 'A business account that is tailored to fit your growing business banking needs. MyMoBiz Plus is an all-in-one solution that puts banking at your fingertips with a bundle of products and services at a fixed monthly service fee. Apply for your business account now and stay in control of your banking.',
      price: '165',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: 'Bundle offering',
      category: 'Flexible',
            accountCardImg: 'assets/images/media/account-card.png',
    },
    {
      id: 3,
      title: 'Business Current Account',
      description: 'Run your business with a business bank account that lets you manage your money and transact 24/7 from your Banking App or Internet Banking. Our business current account gives you access to secure electronic transfers, pre-paid purchases and payments, and allows you to boost your business\'s cashflow with tailored business lending solutions.',
      price: '95',
      pricetenure: 'Min Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: '',
      category: 'Term',
            accountCardImg: 'assets/images/media/account-card.png',
    }
  ]

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

}
