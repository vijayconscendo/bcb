import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-finance-carousel-mob',
  imports: [CommonModule],
  templateUrl: './finance-carousel-mob.component.html',
  styleUrl: './finance-carousel-mob.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinanceCarouselMobComponent {

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  @ViewChild('finainceSwiperWeb', { static: false }) finainceSwiperWeb!: ElementRef;
  ngAfterViewInit() {
    if (!this.isBrowser) return;

    const finainceSwiperWeb = this.finainceSwiperWeb.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 0,
      // loop: true,
      centeredSlides: false,

      // Connect to external elements
      pagination: {
        el: '.finance-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.finance-next',
        prevEl: '.finance-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1900: {
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: false,
        },
      },
    };

    // Assign parameters
    Object.assign(finainceSwiperWeb, swiperParams);

    setTimeout(() => {
    finainceSwiperWeb.initialize();
    }, 100);
  }
}
