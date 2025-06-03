import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inline-image-text-card',
  imports: [CommonModule],
  templateUrl: './inline-image-text-card.component.html',
  styleUrl: './inline-image-text-card.component.scss'
})
export class InlineImageTextCardComponent {
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() linkText!: string;
  @Input() linkUrl!: string;
  @Input() verticalView: boolean = true;
}
