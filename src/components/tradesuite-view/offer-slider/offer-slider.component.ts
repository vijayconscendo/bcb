import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-offer-slider',
  imports: [CommonModule],
  templateUrl: './offer-slider.component.html',
  styleUrl: './offer-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OfferSliderComponent {
  @ViewChild('swiperExploreSolutions') swiperExploreSolutions!: ElementRef;
  ngAfterViewInit() {
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
