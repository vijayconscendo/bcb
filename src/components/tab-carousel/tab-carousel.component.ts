import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-tab-carousel',
  imports: [CommonModule],
  templateUrl: './tab-carousel.component.html',
  styleUrl: './tab-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabCarouselComponent implements AfterViewInit, OnDestroy {
  swiperVisible: boolean = true;
  tabs = [
    { id: 'start-business', label: 'Starting a new business' },
    { id: 'manage-business', label: 'Managing your business' },
    { id: 'grow-business', label: 'Growing your business' },
  ];
  currentTab: string = this.tabs[0].id;

  toggleTab(tab: string) {
    if (this.currentTab === tab) return; // Avoid unnecessary reinitialization
    this.swiperVisible = false;
    this.currentTab = tab;
    setTimeout(() => {
      this.swiperVisible = true;
      setTimeout(() => {
        this.initializeSwiper();
      });
    }, 500);
  }

  // Slides for "Starting a new business" tab
  startBusinessSlides = [
    {
      img: 'assets/images/cards/own-business.png',
      title: '12 things to know before starting your own business',
      description:
        "If you're an entrepreneur planning to start your own business we've...",
      link: '#',
    },
    {
      img: 'assets/images/cards/small-business.png',
      title: '3 ways small businesses can protect themselves',
      description:
        'Starting a business requires a significant investment, and in',
      link: '#',
    },
    {
      img: 'assets/images/cards/chargebacks.png',
      title: 'Get familiar with chargebacks and fraud claims',
      description:
        'When consumers become victims of fraud, they can turn to the charge',
      link: '#',
    },
    {
      img: 'assets/images/cards/startup-founders.png',
      title: '3 characteristics of successful start-up founders',
      description:
        'Focus on these traits for a successful start-up business positioned for gr',
      link: '#',
    },
  ];

  // Slides for "Managing your business" tab
  manageBusinessSlides = [
    {
      img: 'assets/images/cards/small-business.png',
      title: 'Financial management tips for small businesses',
      description:
        'Effective financial management is critical for small business success...',
      link: '#',
    },
    {
      img: 'assets/images/cards/chargebacks.png',
      title: 'Managing cash flow for seasonal businesses',
      description:
        'Learn how to navigate the challenges of operating a seasonal business with...',
      link: '#',
    },
    {
      img: 'assets/images/cards/own-business.png',
      title: 'Streamlining your operations for efficiency',
      description:
        'Discover proven methods to optimize your business processes and reduce...',
      link: '#',
    },
    {
      img: 'assets/images/cards/startup-founders.png',
      title: 'Building and leading an effective team',
      description:
        'Learn practical strategies for hiring, training, and motivating employees...',
      link: '#',
    },
  ];

  // Slides for "Growing your business" tab
  growBusinessSlides = [
    {
      img: 'assets/images/cards/startup-founders.png',
      title: 'Scaling strategies for established businesses',
      description:
        'Ready to take your business to the next level? Explore proven approaches to...',
      link: '#',
    },
    {
      img: 'assets/images/cards/own-business.png',
      title: 'Digital marketing techniques for growth',
      description:
        'Learn how to leverage social media, SEO, and content marketing to expand your...',
      link: '#',
    },
    {
      img: 'assets/images/cards/chargebacks.png',
      title: 'Expansion opportunities: When to open a new location',
      description:
        'Considering physical expansion? This guide helps you evaluate timing and...',
      link: '#',
    },
    {
      img: 'assets/images/cards/small-business.png',
      title: 'Finding and securing growth capital',
      description:
        'Explore different financing options from traditional loans to venture capital...',
      link: '#',
    },
  ];

  // Method to get the appropriate slides based on current tab
  get currentSlides() {
    switch (this.currentTab) {
      case 'manage-business':
        return this.manageBusinessSlides;
      case 'grow-business':
        return this.growBusinessSlides;
      case 'start-business':
      default:
        return this.startBusinessSlides;
    }
  }

  @ViewChild('tabCarouselSwiper') tabCarouselSwiper!: ElementRef;

  ngAfterViewInit() {
    // Initialize the swiper on component initialization
    this.initializeSwiper();
  }

  ngOnDestroy() {}

  initializeSwiper() {
    const swiperEl = this.tabCarouselSwiper?.nativeElement;
    if (!swiperEl) return;

    // Destroy previous instance
    if (swiperEl.swiper && typeof swiperEl.swiper.destroy === 'function') {
      swiperEl.swiper.destroy(true, true);
    }

    // Reassign config
    const swiperParams: SwiperOptions = {
      slidesPerView: 1.2,
      spaceBetween: 16,
      initialSlide: 0,
      centeredSlides: false,
      navigation: false,
      pagination: {
        el: '.tabslide-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4, spaceBetween: 24 },
      },
    };

    Object.assign(swiperEl, swiperParams);

    // Wait just a moment to ensure all attributes are bound before initializing
    setTimeout(() => {
      if (typeof swiperEl.initialize === 'function') {
        swiperEl.initialize();
      }
    });
  }
}
