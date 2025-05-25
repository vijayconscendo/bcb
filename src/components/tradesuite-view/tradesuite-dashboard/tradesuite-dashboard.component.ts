import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { SwiperOptions } from 'swiper/types';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tradesuite-dashboard',
  imports: [TopNavComponent, HeaderComponent],
  templateUrl: './tradesuite-dashboard.component.html',
  styleUrl: './tradesuite-dashboard.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TradesuiteDashboardComponent {

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @ViewChild('swiperExploreSolutions', { static: false }) swiperExploreSolutions!: ElementRef;
  ngAfterViewInit() {
    if (!this.isBrowser) return;
    const swiperExploreSoll = this.swiperExploreSolutions.nativeElement;

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
        991: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    };

    // Assign parameters
    Object.assign(swiperExploreSoll, swiperParams);

    setTimeout(() => {
      swiperExploreSoll.initialize();
    }, 100);
  }

}
