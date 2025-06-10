import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-late-payments',
  imports: [BreadcrumbComponent],
  templateUrl: './late-payments.component.html',
  styleUrl: './late-payments.component.scss'
})
export class LatePaymentsComponent {

}
