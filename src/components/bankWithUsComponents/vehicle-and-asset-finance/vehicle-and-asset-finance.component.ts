import { Component, ViewEncapsulation } from '@angular/core';
import { PageBannerComponent } from "../../generic-components/page-banner/page-banner.component";
import { PageIntroComponent } from "../../generic-components/page-intro/page-intro.component";
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { ImageHeadingCard } from "../../../models/image-heading-card.model"
import { CommonModule } from '@angular/common';
import { FinanceCarouselMobComponent } from '../finance-carousel-mob/finance-carousel-mob.component';
import { FinanceCarouselWebComponent } from '../finance-carousel-web/finance-carousel-web.component';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardComponent } from "../../generic-components/featured-card/featured-card.component";


@Component({
  selector: 'app-vehicle-and-asset-finance',
  imports: [CommonModule, PageBannerComponent, PageIntroComponent, ImageHeadingCardComponent, FinanceCarouselMobComponent, FinanceCarouselWebComponent, DynamicSwiperComponent, FeaturedCardComponent],
  templateUrl: './vehicle-and-asset-finance.component.html',
  styleUrl: './vehicle-and-asset-finance.component.scss',
})
export class VehicleAndAssetFinanceComponent {


    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Confidence',
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

featuredCardData = [
  {
    title: 'Restructure your vehicle financing',
    description: "Call us on 086 110 2347 during office hours to adjust your repayments. We'll give you a unique reference number to access our secure portal, where you can submit everything you need to complete your application.",
    imageSrc: 'assets/images/media/vans.jpg',
    imageAlt: "card img",
    buttonLabel: 'go to portal',
    buttonLink: '#'
  },
  {
    title: 'Vehicle and asset insurance',
    description: 'Safeguard the continuity of your business with an insurance solution that’s customised to your business operations',
    imageSrc: 'assets/images/media/vans.jpg',
    imageAlt: 'card img',
    buttonLabel: 'tell me more',
    buttonLink: '#'
  },
];


}
