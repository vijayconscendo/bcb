import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  imports: [CommonModule],
  templateUrl: './featured-card.component.html',
  styleUrl: './featured-card.component.scss'
})
export class FeaturedCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;
  @Input() buttonLabel: string = 'Learn More';
  @Input() buttonLink: string = '#';
  @Input() className: string = '';
}
