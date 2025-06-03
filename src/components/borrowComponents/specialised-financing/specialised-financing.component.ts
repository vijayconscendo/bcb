import { Component } from '@angular/core';
import { PageBannerComponent } from "../../generic-components/page-banner/page-banner.component";
import { BreadcrumbComponent } from "../../generic-components/breadcrumb/breadcrumb.component";
import { PageIntroComponent } from "../../generic-components/page-intro/page-intro.component";
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { InlineImageTextCardComponent } from '../../generic-components/inline-image-text-card/inline-image-text-card.component';
import { DynamicSwiperComponent } from "../../generic-components/dynamic-swiper/dynamic-swiper.component";
import { FeaturedCardComponent } from '../../generic-components/featured-card/featured-card.component';

@Component({
  selector: 'app-specialised-financing',
  imports: [PageBannerComponent, BreadcrumbComponent, PageIntroComponent, ImageHeadingCardComponent, InlineImageTextCardComponent, DynamicSwiperComponent, FeaturedCardComponent],
  templateUrl: './specialised-financing.component.html',
  styleUrl: './specialised-financing.component.scss'
})
export class SpecialisedFinancingComponent {
    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Expert support',
      description: 'Talk to our property specialists about the right property and financing for you'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Clear insights',
      description: 'Know the opportunities in your area with access to our market trends analysis'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Flexible terms',
      description: 'Let us structure your capital repayments around your cash flow needs'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Affordable',
      description: 'Grow your property portfolio with investments that suit your budget'
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

featuredCardData = [
  {
    title: 'Business loans',
    description: "Looking to raise capital for your next big opportunity? Let’s make it happen on terms that work for your business.",
    imageSrc: 'assets/images/media/vans.jpg',
    imageAlt: "card img",
    buttonLabel: 'tell me more',
    buttonLink: '#'
  },
  {
    title: 'Bonds and guarantees',
    description: 'Open more doors by reducing your credit and performance risk with the appropriate bond or guarantee from us.',
    imageSrc: 'assets/images/media/vans.jpg',
    imageAlt: 'card img',
    buttonLabel: 'tell me more',
    buttonLink: '#'
  },
];

}
