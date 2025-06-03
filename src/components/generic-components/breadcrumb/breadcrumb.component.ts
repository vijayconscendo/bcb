import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../models/breadcrumb.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: Breadcrumb[] = [];
  @Input() showBackButton: boolean = true;
  @Input() backLink?: string;
  @Input() customClass: string = '';

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
  
}
