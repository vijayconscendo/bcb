import { Component } from '@angular/core';
import { PageBannerComponent } from "../../generic-components/page-banner/page-banner.component";
import { BreadcrumbComponent } from "../../generic-components/breadcrumb/breadcrumb.component";
import { PageIntroComponent } from "../../generic-components/page-intro/page-intro.component";
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { InlineImageTextCardComponent } from '../../generic-components/inline-image-text-card/inline-image-text-card.component';
import { DynamicSwiperComponent } from "../../generic-components/dynamic-swiper/dynamic-swiper.component";
import { FeaturedCardComponent } from "../../generic-components/featured-card/featured-card.component";

@Component({
  selector: 'app-your-agri-business',
  imports: [PageBannerComponent, BreadcrumbComponent, PageIntroComponent, ImageHeadingCardComponent, InlineImageTextCardComponent, DynamicSwiperComponent, FeaturedCardComponent],
  templateUrl: './your-agri-business.component.html',
  styleUrl: './your-agri-business.component.scss'
})
export class YourAgriBusinessComponent {

  imageHeadingCardsData: ImageHeadingCard[] = [
  {
    imageUrl: 'assets/images/icons/dummy-shield.png',
    title: 'Needs analysis',
    description: 'Let us get to know you and your unique business before giving you a quote'
  },
  {
    imageUrl: 'assets/images/icons/dummy-shield.png',
    title: 'Affordable cover',
    description: 'Tailor our range of cover options to your needs at highly competitive rates'
  },
  {
    imageUrl: 'assets/images/icons/dummy-shield.png',
    title: 'No excess',
    description: 'Pay no motor excess if you’re over 55 years old'
  },
  {
    imageUrl: 'assets/images/icons/dummy-shield.png',
    title: 'Staff cover',
    description: 'Give employees access to certain cover, like group personal accident'
  }
];


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
