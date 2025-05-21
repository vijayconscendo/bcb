import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Inject, Input, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

let uniqueIdCounter = 0;

@Component({
  selector: 'app-dynamic-swiper',
  imports: [CommonModule],
  templateUrl: './dynamic-swiper.component.html',
  styleUrl: './dynamic-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DynamicSwiperComponent {


  @Input() slides: any[] = []; // Accept object array
  @Input() itemTemplate!: TemplateRef<any>; // Template for each slide
  @Input() config: SwiperOptions = {}; // Allow custom configs
  @Input() breakpoints: SwiperOptions['breakpoints'] = {};

  @ViewChild('customSwiper', { static: false }) customSwiper!: ElementRef;

  isBrowser: boolean;
  uniqueId: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    uniqueIdCounter++;
    this.uniqueId = `swiper-${uniqueIdCounter}`;
  }

  ngAfterViewInit() {
    if (!this.isBrowser || !this.customSwiper?.nativeElement) return;

    const defaultParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 0,
      centeredSlides: false,
      pagination: {
        el: `#${this.uniqueId} .swiper-pagination`,
        clickable: true,
      },
      navigation: {
        nextEl: `#${this.uniqueId} .swiper-next`,
        prevEl: `#${this.uniqueId} .swiper-prev`,
      },
      breakpoints: this.breakpoints, // inject the dynamic breakpoints here
    };

  const mergedParams = { ...defaultParams, ...this.config };
  Object.assign(this.customSwiper.nativeElement, mergedParams);

    setTimeout(() => {
      this.customSwiper.nativeElement.initialize();
    }, 100);
  }


}
