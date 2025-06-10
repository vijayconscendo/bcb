import { Component } from '@angular/core';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardTwoComponent } from '../../generic-components/featured-card-two/featured-card-two.component';

@Component({
  selector: 'app-new-business',
  imports: [DynamicSwiperComponent, FeaturedCardTwoComponent],
  templateUrl: './new-business.component.html',
  styleUrl: './new-business.component.scss'
})
export class NewBusinessComponent {

  customBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  };


featuredCardData = [
    {
      imageSrc: 'assets/images/cards/own-business.png',
      title: '12 things to know before starting your own business',
      description:
        "If you're an entrepreneur planning to start your own business we've...",
      buttonLabel: 'Read more',
      link: '/help-me-start-my-business/articles/12-things-to-know-before-starting-your-own-business',
    },
    {
      imageSrc: 'assets/images/cards/small-business.png',
      title: '3 ways small businesses can protect themselves',
      description:
        'Starting a business requires a significant investment, and in',
      buttonLabel: 'Read more',
      link: '/help-me-start-my-business/articles/3-ways-small-businesses-can-protect-themselves-financially',
    },
    {
      imageSrc: 'assets/images/cards/chargebacks.png',
      title: 'Get familiar with chargebacks and fraud claims',
      description:
        'When consumers become victims of fraud, they can turn to the charge',
      buttonLabel: 'Read more',
      link: '/help-me-start-my-business/articles/get-familiar-with-chargebacks-and-fraud-claims',
    },
    {
      imageSrc: 'assets/images/cards/startup-founders.png',
      title: '3 characteristics of successful start-up founders',
      description:
        'Focus on these traits for a successful start-up business positioned for gr',
      buttonLabel: 'Read more',
      link: '/help-me-start-my-business/guides/3-characteristics-of-successful-start-up-founders',
    }
];
}
