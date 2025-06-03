import { Component } from '@angular/core';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-application',
  imports: [PageIntroComponent, RouterLink],
  templateUrl: './account-application.component.html',
  styleUrl: './account-application.component.scss'
})
export class AccountApplicationComponent {

}
