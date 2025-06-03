import { Component } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-merchant-solutions',
  imports: [PageBannerComponent, PageIntroComponent, BreadcrumbComponent],
  templateUrl: './merchant-solutions.component.html',
  styleUrl: './merchant-solutions.component.scss'
})
export class MerchantSolutionsComponent {

}
