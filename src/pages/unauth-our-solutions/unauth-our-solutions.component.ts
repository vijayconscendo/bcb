import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { UnauthSolutionGridComponent } from '../../components/unauth-solution-grid/unauth-solution-grid.component';
import { UcountBannerComponent } from '../../components/ucount-banner/ucount-banner.component';
import { ExploreSolutionsCarouselComponent } from '../../components/explore-solutions-carousel/explore-solutions-carousel.component';
import { MoneyTransferCarouselComponent } from '../../components/money-transfer-carousel/money-transfer-carousel.component';
import { PageBannerComponent } from '../../components/generic-components/page-banner/page-banner.component';

@Component({
  selector: 'app-unauth-our-solutions',
  imports: [
    CommonModule,
    PageBannerComponent,
    UnauthSolutionGridComponent,
    UcountBannerComponent,
    ExploreSolutionsCarouselComponent,
    MoneyTransferCarouselComponent,
  ],
  templateUrl: './unauth-our-solutions.component.html',
  styleUrl: './unauth-our-solutions.component.scss',
})
export class UnauthOurSolutionsComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
