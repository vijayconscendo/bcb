import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { DynamicSwiperComponent } from '../generic-components/dynamic-swiper/dynamic-swiper.component';

@Component({
  selector: 'app-money-transfer-carousel',
  imports: [DynamicSwiperComponent],
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
  { title: 'Online banking', alt: 'Online banking', image: 'assets/images/media/laptop-online.png' },
  { title: 'Mobile app', alt: 'Mobile app', image: 'assets/images/media/mobile-online.png' },
  { title: 'ATM', alt: 'ATM', image: 'assets/images/media/atm-machine.png' },
  { title: 'Cellphone banking', alt: 'Cellphone banking', image: 'assets/images/media/sms-code.png' },
  { title: 'Cellphone banking', alt: 'Cellphone banking', image: 'assets/images/media/sms-code.png' },
];

}
