import { Component } from '@angular/core';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardTwoComponent } from '../../generic-components/featured-card-two/featured-card-two.component';

@Component({
  selector: 'app-grow-business',
  imports: [DynamicSwiperComponent, FeaturedCardTwoComponent],
  templateUrl: './grow-business.component.html',
  styleUrl: './grow-business.component.scss'
})
export class GrowBusinessComponent {

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
      imageSrc: 'assets/images/articles/tailored-banking.jpg',
      title: 'How our tailored banking solutions can benefit your accounting practice',
      description:
        'Ready to take your business to the next level? Explore proven approaches to...',
      link: '/help-me-grow-my-business/articles/how-our-tailored-banking-solutions-can-benefit-your-accounting-practice',
      buttonLabel: 'Read more',
    },
    {
      imageSrc: 'assets/images/articles/critical-ways.jpg',
      title: '3 critical ways to create a solid support structure for your franchisees for business success',
      description:
        'Getting your franchisees to sign on was the easy part; giving them adequate support to make a success of the business is the real challenge.',
      link: '/help-me-grow-my-business/guides/support-structure-for-your-franchisees',
      buttonLabel: 'Read more',
    },
    {
      imageSrc: 'assets/images/articles/right-marketing.jpg',
      title: 'How to find the right marketing channel for your target market',
      description:
        'One of the most vital steps in a successful marketing campaign is choosing a marketing channel.',
      link: '/help-me-grow-my-business/guides/how-to-find-the-right-marketing-channel-for-your-target-market',
      buttonLabel: 'Read more',
    },
    {
      imageSrc: 'assets/images/articles/consumer-behaviour.jpg',
      title: 'How to influence consumer behaviour with behavioural economics',
      description:
        'When consumers become victims of fraud, they can turn to the chargeback process to recover',
      link: '/help-me-grow-my-business/guides/how-to-influence-consumer-behaviour-with-behavioural-economics',
      buttonLabel: 'Read more',
    },
];
}
