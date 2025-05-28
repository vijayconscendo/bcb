import { CommonModule, isPlatformBrowser } from '@angular/common';

import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';

@Component({
  selector: 'app-bank-with-us-home',
  imports: [CommonModule, RouterLink, PageBannerComponent],
  templateUrl: './bank-with-us-home.component.html',
  styleUrl: './bank-with-us-home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BankWithUsHomeComponent {

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  @ViewChild('guidanceswiperContainer', { static: false }) guidanceswiperContainer!: ElementRef;
  ngAfterViewInit() {
    if (!this.isBrowser) return;

    const swiperE2 = this.guidanceswiperContainer.nativeElement;

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
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
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
