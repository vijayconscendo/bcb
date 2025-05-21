import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ImageHeaduingCard {
  imageUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-image-heading-card',
  imports: [CommonModule],
  templateUrl: './image-heading-card.component.html',
  styleUrl: './image-heading-card.component.scss'
})
export class ImageHeadingCardComponent {
 @Input() imageHeaduingCards: ImageHeaduingCard[] = [];
}
