import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { CallAndExploreComponent } from '../../generic-components/call-and-explore/call-and-explore.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { SwiperOptions } from 'swiper/types';
import { InlineImageTextCardComponent } from '../../generic-components/inline-image-text-card/inline-image-text-card.component';
import { ContactCardComponent } from '../../generic-components/contact-card/contact-card.component';
import { ContentButtonComponent } from '../../generic-components/content-button/content-button.component';
import { ContactCard } from '../../../models/contact-card.model';

@Component({  selector: 'app-shariah-banking',  imports: [
    CommonModule,
    PageBannerComponent,
    BreadcrumbComponent,
    PageIntroComponent,
    InlineImageTextCardComponent,
    ContactCardComponent,
    ContentButtonComponent,
    CallAndExploreComponent,
  ],
  templateUrl: './shariah-banking.component.html',
  styleUrl: './shariah-banking.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShariahBankingComponent {
  isBrowser: boolean;

  // Contact cards data for the "Get in Touch" section
  contactCards: ContactCard[] = [
    {
      icon: 'assets/images/icons/icn_mail.png',
      iconAlt: 'mail icon',
      title: 'Click here to view our Personal Shari\'ah compliant products',
      description: 'Explore our Shari\'ah-compliant products that are true to the tradition and principles of Shari\'ah',
      linkUrl: '/personal-shariah-products',
      linkType: 'url',
      // linkText: 'Learn More'
    },
    {
      icon: 'assets/images/icons/icn_call.png',
      iconAlt: 'call icon',
      title: 'Click here to view the Shari\'ah offerings for your business',
      description: 'View our Shari\'ah-compliant Business Banking products that are true to both the principles of innovation and tradition',
      linkUrl: '/business-shariah-products',
      linkType: 'url',
      // linkText: 'Explore Now'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @ViewChild('guidanceswiperContainerWeb', { static: false })
  guidanceswiperContainerWeb!: ElementRef;
  ngAfterViewInit() {
    if (!this.isBrowser) return;

    const swiperE2 = this.guidanceswiperContainerWeb.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 0,
      // loop: true,
      centeredSlides: false,

      // Connect to external elements
      pagination: {
        el: '.guide-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.guide-next',
        prevEl: '.guide-prev',
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
}
