import { Component } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-industry',
  imports: [PageBannerComponent, PageIntroComponent, BreadcrumbComponent],
  templateUrl: './industry.component.html',
  styleUrl: './industry.component.scss'
})
export class IndustryComponent {

}
