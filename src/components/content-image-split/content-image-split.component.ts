import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-image-split',
  imports: [CommonModule],
  templateUrl: './content-image-split.component.html',
  styleUrl: './content-image-split.component.scss'
})
export class ContentImageSplitComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() mobileImageUrl:string = '';
  @Input() buttonText: string = '';
  @Input() btnIconUrl: string = '';
  @Input() reverseLayout: boolean = false;
}
