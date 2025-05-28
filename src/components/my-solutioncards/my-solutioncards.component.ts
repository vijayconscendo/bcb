import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-my-solutioncards',
  imports: [CommonModule],
  templateUrl: './my-solutioncards.component.html',
  styleUrl: './my-solutioncards.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MySolutioncardsComponent {
  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {

    if (!this.isBrowser) return;
    const swiperEl = this.swiperContainer.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      // Connect to external elements
      pagination: {
        el: '.custom-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };

    // Assign parameters
    Object.assign(swiperEl, swiperParams);

    setTimeout(() => {
      swiperEl.initialize();
    }, 100);
  }
}
