import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-with-links',
  imports: [CommonModule],
  templateUrl: './card-with-links.component.html',
  styleUrl: './card-with-links.component.scss'
})
export class CardWithLinksComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() links!: { label: string; url: string }[];
  @Input() arrowIconUrl: string = 'assets/images/icons/col-icon-right.png';
  
  // Dynamic button properties
  @Input() showButton: boolean = true;
  @Input() buttonLabel: string = 'View More';
  @Input() buttonUrl: string = '#';
  @Input() buttonTarget: '_blank' | '_self' = '_self';
  @Input() buttonClass: string = 'link-btn mt-4';
  @Input() isExternalLink: boolean = false;
}
