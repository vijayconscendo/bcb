import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-startup',
  imports: [BreadcrumbComponent],
  templateUrl: './startup.component.html',
  styleUrl: '../things-to-know/things-to-know.component.scss'
})
export class StartupComponent {

}
