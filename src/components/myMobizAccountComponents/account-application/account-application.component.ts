import { Component } from '@angular/core';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-account-application',
  imports: [RouterLink, PageIntroComponent, BreadcrumbComponent],
  templateUrl: './account-application.component.html',
  styleUrl: './account-application.component.scss'
})
export class AccountApplicationComponent {

}
