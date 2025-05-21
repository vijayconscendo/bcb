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
}
