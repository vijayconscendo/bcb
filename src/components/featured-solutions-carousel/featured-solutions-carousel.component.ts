import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-featured-solutions-carousel',
  imports: [CommonModule],
  templateUrl: './featured-solutions-carousel.component.html',
  styleUrl: './featured-solutions-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturedSolutionsCarouselComponent {


  featuredSlides = [
    {
      img: 'assets/images/icons/secure-icon.png',
      alt: 'security',
      title: 'Secure Centralised Access',
      description: "Manage your accounts and access your banking services in one centralised place",
      background: 'assets/images/media/ftd-secure.png'
    },
    // Add more items as needed
    {
      img: 'assets/images/icons/secure-icon.png',
      alt: 'security',
      title: 'Financial Health Monitor',
      description: 'Keep your business’s finances stable with our financial management tools',
      background: 'assets/images/media/ftd-secure.png'
    },
    {
      img: 'assets/images/icons/secure-icon.png',
      alt: 'security',
      title: 'Industry Insights',
      description: 'Keep your business’s finances stable with our financial management tools',
      background: 'assets/images/media/ftd-secure.png'
    },
    {
      img: 'assets/images/icons/secure-icon.png',
      alt: 'security',
      title: 'Self-Service Tools',
      description: 'Keep your business’s finances stable with our financial management tools',
      background: 'assets/images/media/ftd-secure.png'
    },
    {
      img: 'assets/images/icons/secure-icon.png',
      alt: 'security',
      title: 'Self-Service Tools',
      description: 'Keep your business’s finances stable with our financial management tools',
      background: 'assets/images/media/ftd-secure.png'
    }
  ];

  @ViewChild('featuredswiperContainer') featuredswiperContainer!: ElementRef;
  ngAfterViewInit() {
    const swiperE2 = this.featuredswiperContainer.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 24,
      initialSlide: 0,
      // loop: true,
      centeredSlides: true,

      // Connect to external elements
      pagination: {
        el: '.ftd-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.ftd-next',
        prevEl: '.ftd-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
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
