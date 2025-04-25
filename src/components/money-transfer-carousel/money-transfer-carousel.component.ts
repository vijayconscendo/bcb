import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-money-transfer-carousel',
  imports: [],
  templateUrl: './money-transfer-carousel.component.html',
  styleUrl: './money-transfer-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoneyTransferCarouselComponent {
  @ViewChild('swiperMoneyTransCarousel') swiperMoneyTransCarousel!: ElementRef;
  ngAfterViewInit() {
    const swiperMoneyTransfer = this.swiperMoneyTransCarousel.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      // Connect to external elements
      pagination: {
        el: '.mt-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.mt-next',
        prevEl: '.mt-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };

    // Assign parameters
    Object.assign(swiperMoneyTransfer, swiperParams);

    setTimeout(() => {
      swiperMoneyTransfer.initialize();
    }, 100);
  }
}
