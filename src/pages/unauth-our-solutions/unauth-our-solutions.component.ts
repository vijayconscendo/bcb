import { Component } from '@angular/core';
import { PageBannerOneComponent } from '../../components/page-banner-one/page-banner-one.component';
import { CommonModule } from '@angular/common';
import { UnauthSolutionGridComponent } from '../../components/unauth-solution-grid/unauth-solution-grid.component';
import { UcountBannerComponent } from '../../components/ucount-banner/ucount-banner.component';

@Component({
  selector: 'app-unauth-our-solutions',
  imports: [CommonModule, PageBannerOneComponent, UnauthSolutionGridComponent, UcountBannerComponent],
  templateUrl: './unauth-our-solutions.component.html',
  styleUrl: './unauth-our-solutions.component.scss'
})
export class UnauthOurSolutionsComponent {

}
