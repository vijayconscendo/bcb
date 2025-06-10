import { Component } from '@angular/core';
import { DynamicSwiperComponent } from '../../generic-components/dynamic-swiper/dynamic-swiper.component';
import { FeaturedCardTwoComponent } from '../../generic-components/featured-card-two/featured-card-two.component';

@Component({
  selector: 'app-manage-business',
  imports: [DynamicSwiperComponent, FeaturedCardTwoComponent],
  templateUrl: './manage-business.component.html',
  styleUrl: './manage-business.component.scss'
})
export class ManageBusinessComponent {

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
      imageSrc: 'assets/images/articles/call-scam.jpg',
      title: 'It takes a phone call to avoid this scam',
      description:
        'When a supplier changes banking details, businesses need to know that scammers are on the hunt to make lucrative profits',
      link: '/help-me-manage-my-business/guides/It-takes-a-phone-call-to-avoid-this-scam',
      buttonLabel: 'Read more',
    },
    {
      imageSrc: 'assets/images/articles/late-payments.jpg',
      title: 'How to effectively deal with late payments',
      description:
        'Getting paid on time and in full is just as important as signing the deal or making the sale. But it’s a frustration that every business is likely to face at some stage.',
      link: '/help-me-manage-my-business/guides/how-to-effectively-deal-with-late-payments',
      buttonLabel: 'Read more',
    },
    {
      imageSrc: 'assets/images/articles/digital-transformation.jpg',
      title: 'Digital transformation will save you money',
      description:
        'How digital transformation can save costs and improve business efficiency and moving away from legacy systems.',
      link: '/help-me-manage-my-business/articles/digital-transformation-will-save-you-money',
      buttonLabel: 'Read more',
    },
    {
      imageSrc: 'assets/images/articles/saving-tips.jpg',
      title: '6 energy-saving tips for small businesses',
      description:
        'As a small business owner, you always have to be mindful of how to keep your operating costs low.',
      link: '/help-me-manage-my-business/guides/6-energy-saving-tips-for-small-businesses',
      buttonLabel: 'Read more',
      },
];
}
