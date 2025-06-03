import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { PagePromoCardComponent } from '../../generic-components/page-promo-card/page-promo-card.component';
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { TabListComponent } from './tab-list/tab-list.component';
import { DynamicSwiperComponent } from "../../generic-components/dynamic-swiper/dynamic-swiper.component";
import { FeaturedCardComponent } from "../../generic-components/featured-card/featured-card.component";


@Component({
  selector: 'app-small-business-insurance',
  imports: [BreadcrumbComponent, PageIntroComponent, PagePromoCardComponent, ImageHeadingCardComponent, TabListComponent, DynamicSwiperComponent, FeaturedCardComponent],
  templateUrl: './small-business-insurance.component.html',
  styleUrl: './small-business-insurance.component.scss'
})
export class SmallBusinessInsuranceComponent {

  promoCardData = {
    title: '',
    description: 'We’ll protect your business from unexpected events, so you can focus on growing a solid business. Get flexible business insurance from brokers who specialize in your sector. Enjoy fast and friendly service whenever you need it with a product that can change effortlessly with your evolving Business’s need.',
    imageSrc: 'assets/images/media/atm-banking-promo.jpg',
    imageAlt: 'ATM Banking',
    storeImages: [],
    outlineBtnVisible: true,
    outlineBtnText: 'call me back',
    outlineBtnLink: '',
    primaryBtnVisible: false,
    primaryBtnText: '',
    primaryBtnLink: ''
  };

  imageHeadingCardsData: ImageHeadingCard[] = [
  {
    imageUrl: 'assets/images/icons/dummy-shield.png',
    title: 'Needs analysis',
    description: 'Our consultants will conduct a needs analysis based on the kinds of risks your business faces'
  },
  {
    imageUrl: 'assets/images/icons/dummy-shield.png',
    title: 'Competitive quote',
    description: 'Pay for a single insurance policy that covers everything your business really needs'
  },
  {
    imageUrl: 'assets/images/icons/dummy-shield.png',
    title: 'Easy claims',
    description: 'Our dedicated claims team will help you settle your claims as fast as possible'
  },
  {
    imageUrl: 'assets/images/icons/dummy-shield.png',
    title: 'Personal service',
    description: 'Your account executive can come to you whenever you need our help'
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
