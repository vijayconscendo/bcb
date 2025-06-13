import { Component } from '@angular/core';
import { PageBannerComponent } from "../../generic-components/page-banner/page-banner.component";
import { BreadcrumbComponent } from "../../generic-components/breadcrumb/breadcrumb.component";
import { PageIntroComponent } from "../../generic-components/page-intro/page-intro.component";
import { InlineImageTextCardComponent } from "../../generic-components/inline-image-text-card/inline-image-text-card.component";
import { DynamicSwiperComponent } from "../../generic-components/dynamic-swiper/dynamic-swiper.component";
import { CardWithLinksComponent } from "../../generic-components/card-with-links/card-with-links.component";
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';

@Component({
  selector: 'app-your-vehicles',
  imports: [PageBannerComponent, BreadcrumbComponent, PageIntroComponent, InlineImageTextCardComponent, DynamicSwiperComponent, CardWithLinksComponent, FeaturedCardComponent],
  templateUrl: './your-vehicles.component.html',
  styleUrl: './your-vehicles.component.scss'
})
export class YourVehiclesComponent {
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
  768: {
    slidesPerView: 2,
    spaceBetween: 16,
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
