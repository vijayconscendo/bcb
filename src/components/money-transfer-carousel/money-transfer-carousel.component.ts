import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { DynamicSwiperComponent } from '../generic-components/dynamic-swiper/dynamic-swiper.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-money-transfer-carousel',
  imports: [DynamicSwiperComponent, RouterLink],
  templateUrl: './money-transfer-carousel.component.html',
  styleUrl: './money-transfer-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoneyTransferCarouselComponent {
  
  customBreakpoints = {
    640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 32,
  },
}

moneyUsage = [
  { title: 'Online banking', alt: 'Online banking', image: 'assets/images/media/laptop-online.png', link: '/ways-to-bank/online-banking' },
  { title: 'Mobile app', alt: 'Mobile app', image: 'assets/images/media/mobile-online.png', link: '/ways-to-bank/mobile-app-banking' },
  { title: 'ATM', alt: 'ATM', image: 'assets/images/media/atm-machine.png', link: '/ways-to-bank/atm-banking' },
  { title: 'Cellphone banking', alt: 'Cellphone banking', image: 'assets/images/media/sms-code.png', link: '/ways-to-bank/cellphone-banking' },
  { title: 'Online banking for business', alt: 'online banking', image: 'assets/images/media/sms-code.png', link: '/ways-to-bank/online-banking-for-business' },
  { title: 'Busincess online', alt: 'business onlie', image: 'assets/images/media/sms-code.png', link: '/ways-to-bank/business-online' },
  { title: 'Telephone and Speech banking', alt: 'Telephone banking', image: 'assets/images/media/sms-code.png', link: '/ways-to-bank/telephone-and-speech-banking' },
];

}
