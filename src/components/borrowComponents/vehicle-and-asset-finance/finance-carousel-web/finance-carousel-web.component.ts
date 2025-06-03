import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-finance-carousel-web',
  imports: [CommonModule],
  templateUrl: './finance-carousel-web.component.html',
  styleUrl: './finance-carousel-web.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinanceCarouselWebComponent {


  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  @ViewChild('guidanceswiperContainerWeb', { static: false }) guidanceswiperContainerWeb!: ElementRef;
  ngAfterViewInit() {
    if (!this.isBrowser) return;

    const swiperE2 = this.guidanceswiperContainerWeb.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 0,
      // loop: true,
      centeredSlides: false,

      // Connect to external elements
      pagination: {
        el: '.guide-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.guide-next',
        prevEl: '.guide-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 24,
          centeredSlides: false,
        },
      },
    };

    // Assign parameters
    Object.assign(swiperE2, swiperParams);

    setTimeout(() => {
    swiperE2.initialize();
    }, 100);
  }
}
