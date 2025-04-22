import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-tab-carousel',
  imports: [CommonModule],
  templateUrl: './tab-carousel.component.html',
  styleUrl: './tab-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabCarouselComponent {

  tabSlides = [
    {
      img: 'assets/images/cards/own-business.png',
      title: '12 things to know before starting your own business',
      description: "If you're an entrepreneur planning to start your own business we've...",
      link: '#'
    },
    {
      img: 'assets/images/cards/small-business.png',
      title: '3 ways small businesses can protect themselves',
      description: 'Starting a business requires a significant investment, and in',
      link: '#'
    },
    {
      img: 'assets/images/cards/chargebacks.png',
      title: 'Get familiar with chargebacks and fraud claims',
      description: 'When consumers become victims of fraud, they can turn to the charge',
      link: '#'
    },
    {
      img: 'assets/images/cards/startup-founders.png',
      title: '3 characteristics of successful start-up founders',
      description: 'Focus on these traits for a successful start-up business positioned for gr',
      link: '#'
    },
    {
      img: 'assets/images/cards/own-business.png',
      title: '3 characteristics of successful start-up founders',
      description: 'Focus on these traits for a successful start-up business positioned for gr',
      link: '#'
    },
    {
      img: 'assets/images/cards/own-business.png',
      title: '3 characteristics of successful start-up founders',
      description: 'Focus on these traits for a successful start-up business positioned for gr',
      link: '#'
    },
  ];
  

  @ViewChild('tabCarouselSwiper') tabCarouselSwiper!: ElementRef;
  ngAfterViewInit() {
    const swiperE3 = this.tabCarouselSwiper.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1.2,
      spaceBetween: 16,
      initialSlide: 0,
      // loop: true,
      centeredSlides: false,
      navigation: false,

      // Connect to external elements
      pagination: {
        el: '.tabslide-pagination',
        clickable: true,
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    };

    // Assign parameters
    Object.assign(swiperE3, swiperParams);

    setTimeout(() => {
    swiperE3.initialize();
    }, 100);
  }

}
