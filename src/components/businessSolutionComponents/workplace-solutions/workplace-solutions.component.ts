import { Component } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { InlineImageTextCardComponent } from '../../generic-components/inline-image-text-card/inline-image-text-card.component';


@Component({
  selector: 'app-workplace-solutions',
  imports: [PageBannerComponent, BreadcrumbComponent, PageIntroComponent, ImageHeadingCardComponent, InlineImageTextCardComponent],
  templateUrl: './workplace-solutions.component.html',
  styleUrl: './workplace-solutions.component.scss'
})
export class WorkplaceSolutionsComponent {
    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Workplace banking',
      description: 'Give your staff one-on-one, professional help so they can achieve their financial goals'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Safe and convenient',
      description: 'PIN-enabled prepaid debit cards offer new ways to easily pay unbanked staff salaries'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Online management',
      description: 'Take full control of Instant Money and PayCard payments with our online tools'
    }
  ];
}
