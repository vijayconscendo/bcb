import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-slider',
  imports: [CommonModule, RouterLink],
  templateUrl: './welcome-slider.component.html',
  styleUrl: './welcome-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeSliderComponent {

    @Input() slides: {
    heading: string;
    imageUrl: string;
    title: string;
    description: string;
  }[] = [];


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
        el: '.push-slide-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev',
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



slideData = [
  {
    title: 'Welcome to your Digital Hub',
    image: 'assets/images/media/online-access.png',
    alt: 'slide img',
    subTitle: 'Access your online platforms in one place',
    description: 'Convenient and easy access your online platforms with Standard Bank.',
    buttonLabel: 'skip',
    buttonLink: '#'
  },
  {
    title: 'Add your preferred online platforms',
    image: 'assets/images/media/online-access.png',
    alt: 'slide img',
    subTitle: 'Simplified access to your digital solutions',
    description: 'Easily access your Standard Bank platforms by linking them to your profile.',
    buttonLabel: 'skip',
    buttonLink: '#'
  },
  {
    title: 'Manage your Digital Hub',
    image: 'assets/images/media/online-access.png',
    alt: 'slide img',
    subTitle: 'Personalise your Digital Hub',
    description: 'You can add and remove your online platforms at any time.',
    buttonLabel: 'get started',
    buttonLink: '#'
  }
];

}
