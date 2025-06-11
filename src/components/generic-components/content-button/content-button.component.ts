import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content-button.component.html',
  styleUrls: ['./content-button.component.scss']
})
export class ContentButtonComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = 'Learn more';
  @Input() buttonLink: string = '/';
  @Input() containerClass: string = 'container-fluid p-0';
  @Input() titleClass: string = 'heading-sm mb-2';
  @Input() descriptionClass: string = 'subtitle-sm';
  @Input() buttonClass: string = 'primary-btn';
  @Input() leftColumnClass: string = 'col-lg-8 col-md-8';
  @Input() rightColumnClass: string = 'col-lg-4 col-md-4 text-lg-end';
  @Input() rowClass: string = 'row gy-3 align-items-center';
}
