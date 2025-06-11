import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-landing-banner',
  imports: [CommonModule],
  templateUrl: './landing-banner.component.html',
  styleUrl: './landing-banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingBannerComponent {
  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;



  currentSlide = 0;

  slides = [
    {
      class: 'banner-one',
      title: 'Access all your business needs in one place',
      description: 'From small to large businesses, we\'ve got the solutions you need to get your business ahead'
    },
    {
      class: 'banner-two',
      title: 'Access all your ',
      description: 'From small to large businesses, we\'ve got the solutions you need to get your business ahead'
    },
    {
      class: 'banner-three',
      title: 'Access all your business needs in one place',
      description: 'From small to large businesses, we\'ve got the solutions you need to get your business ahead'
    }
  ];

  ngAfterViewInit() {
    const swiperEl = this.swiperContainer.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      // spaceBetween: 20,
      initialSlide: 0,
      // loop: true,
      centeredSlides: true,

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
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
          centeredSlides: false,
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
