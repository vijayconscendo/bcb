import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DynamicSwiperComponent } from '../generic-components/dynamic-swiper/dynamic-swiper.component';

@Component({
  selector: 'app-featured-solutions-carousel',
  imports: [CommonModule, DynamicSwiperComponent],
  templateUrl: './featured-solutions-carousel.component.html',
  styleUrl: './featured-solutions-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturedSolutionsCarouselComponent {

  featuredBreakpoints = {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  };

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
      img: 'assets/images/icons/health-monitor-icon.png',
      alt: 'security',
      title: 'Financial Health Monitor',
      description: 'Keep your business’s finances stable with our financial management tools',
      background: 'assets/images/media/health-monitor.png'
    },
    {
      img: 'assets/images/icons/insights-icon.png',
      alt: 'security',
      title: 'Industry Insights',
      description: 'Keep your business’s finances stable with our financial management tools',
      background: 'assets/images/media/industry-insights.png'
    },
    {
      img: 'assets/images/icons/self-service.png',
      alt: 'security',
      title: 'Self-Service Tools',
      description: 'Keep your business’s finances stable with our financial management tools',
      background: 'assets/images/media/self-service-tools.png'
    },
    {
      img: 'assets/images/icons/chat-support-icon.png',
      alt: 'security',
      title: 'Get 24/7 support',
      description: 'Keep your business’s finances stable with our financial management tools',
      background: 'assets/images/media/support-card.png'
    }  ];
  
}
