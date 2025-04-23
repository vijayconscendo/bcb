import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-explore-solutions-carousel',
  imports: [],
  templateUrl: './explore-solutions-carousel.component.html',
  styleUrl: './explore-solutions-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExploreSolutionsCarouselComponent {
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
            slidesPerView: 4,
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
