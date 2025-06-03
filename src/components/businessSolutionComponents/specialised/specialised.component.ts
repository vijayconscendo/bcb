import { Component } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { DynamicSwiperComponent } from "../../generic-components/dynamic-swiper/dynamic-swiper.component";
import { CardWithLinksComponent } from "../../generic-components/card-with-links/card-with-links.component";

@Component({
  selector: 'app-specialised',
  imports: [PageBannerComponent, PageIntroComponent, BreadcrumbComponent, DynamicSwiperComponent, CardWithLinksComponent],
  templateUrl: './specialised.component.html',
  styleUrl: './specialised.component.scss'
})
export class SpecialisedComponent {
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
