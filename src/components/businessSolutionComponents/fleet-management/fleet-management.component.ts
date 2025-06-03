import { Component } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';


@Component({
  selector: 'app-fleet-management',
  imports: [PageBannerComponent, BreadcrumbComponent, PageIntroComponent],
  templateUrl: './fleet-management.component.html',
  styleUrl: './fleet-management.component.scss'
})
export class FleetManagementComponent {

}
