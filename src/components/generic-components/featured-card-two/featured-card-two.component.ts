import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-card-two',
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-card-two.component.html',
  styleUrl: './featured-card-two.component.scss'
})
export class FeaturedCardTwoComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;
  @Input() buttonLabel: string = 'Learn More';
  @Input() buttonLink: string = '#';
  @Input() className: string = '';
}
