import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { NgSelectModule } from '@ng-select/ng-select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-carousel',
  imports: [CommonModule, FormsModule, NgSelectModule],
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

  constructor(private router: Router) {}

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

  // Method to navigate to the appropriate page based on current tab
  navigateToViewAll(event: Event): void {
    event.preventDefault();

    let targetRoute: string;
    switch (this.currentTab) {
      case 'manage-business':
        targetRoute = '/help-me-manage-my-business';
        break;
      case 'grow-business':
        targetRoute = '/help-me-grow-my-business';
        break;
      case 'start-business':
      default:
        targetRoute = '/help-me-start-my-business';
        break;
    }

    this.router.navigate([targetRoute]);
  }

  // Slides for "Starting a new business" tab
  startBusinessSlides = [
    {
      img: 'assets/images/cards/own-business.png',
      title: '12 things to know before starting your own business',
      description:
        "If you're an entrepreneur planning to start your own business we've...",
      link: '/help-me-start-my-business/articles/12-things-to-know-before-starting-your-own-business',
    },
    {
      img: 'assets/images/cards/small-business.png',
      title: '3 ways small businesses can protect themselves',
      description:
        'Starting a business requires a significant investment, and in',
      link: '/help-me-start-my-business/articles/3-ways-small-businesses-can-protect-themselves-financially',
    },
    {
      img: 'assets/images/cards/chargebacks.png',
      title: 'Get familiar with chargebacks and fraud claims',
      description:
        'When consumers become victims of fraud, they can turn to the charge',
      link: '/help-me-start-my-business/articles/get-familiar-with-chargebacks-and-fraud-claims',
    },
    {
      img: 'assets/images/cards/startup-founders.png',
      title: '3 characteristics of successful start-up founders',
      description:
        'Focus on these traits for a successful start-up business positioned for gr',
      link: '/help-me-start-my-business/guides/3-characteristics-of-successful-start-up-founders',
    }
  ];

  // Slides for "Managing your business" tab
  manageBusinessSlides = [
    {
      img: 'assets/images/articles/call-scam.jpg',
      title: 'It takes a phone call to avoid this scam',
      description:
        'When a supplier changes banking details, businesses need to know that scammers are on the hunt to make lucrative profits',
      link: '/help-me-manage-my-business/guides/It-takes-a-phone-call-to-avoid-this-scam',
    },
    {
      img: 'assets/images/articles/late-payments.jpg',
      title: 'How to effectively deal with late payments',
      description:
        'Getting paid on time and in full is just as important as signing the deal or making the sale. But it’s a frustration that every business is likely to face at some stage.',
      link: '/help-me-manage-my-business/guides/how-to-effectively-deal-with-late-payments',
    },
    {
      img: 'assets/images/articles/digital-transformation.jpg',
      title: 'Digital transformation will save you money',
      description:
        'How digital transformation can save costs and improve business efficiency and moving away from legacy systems.',
      link: '/help-me-manage-my-business/articles/digital-transformation-will-save-you-money',
    },
    {
      img: 'assets/images/articles/saving-tips.jpg',
      title: '6 energy-saving tips for small businesses',
      description:
        'As a small business owner, you always have to be mindful of how to keep your operating costs low.',
      link: '/help-me-manage-my-business/guides/6-energy-saving-tips-for-small-businesses',
    },
  ];

  // Slides for "Growing your business" tab
  growBusinessSlides = [
    {
      img: 'assets/images/articles/tailored-banking.jpg',
      title: 'How our tailored banking solutions can benefit your accounting practice',
      description:
        'Ready to take your business to the next level? Explore proven approaches to...',
      link: '/help-me-grow-my-business/articles/how-our-tailored-banking-solutions-can-benefit-your-accounting-practice',
    },
    {
      img: 'assets/images/articles/critical-ways.jpg',
      title: '3 critical ways to create a solid support structure for your franchisees for business success',
      description:
        'Getting your franchisees to sign on was the easy part; giving them adequate support to make a success of the business is the real challenge.',
      link: '/help-me-grow-my-business/guides/support-structure-for-your-franchisees',
    },
    {
      img: 'assets/images/articles/right-marketing.jpg',
      title: 'How to find the right marketing channel for your target market',
      description:
        'One of the most vital steps in a successful marketing campaign is choosing a marketing channel.',
      link: '/help-me-grow-my-business/guides/how-to-find-the-right-marketing-channel-for-your-target-market',
    },
    {
      img: 'assets/images/articles/consumer-behaviour.jpg',
      title: 'How to influence consumer behaviour with behavioural economics',
      description:
        'When consumers become victims of fraud, they can turn to the chargeback process to recover',
      link: '/help-me-grow-my-business/guides/how-to-influence-consumer-behaviour-with-behavioural-economics',
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
      slidesPerView: 1.12,
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
