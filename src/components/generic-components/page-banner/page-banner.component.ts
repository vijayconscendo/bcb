import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  imports: [CommonModule],
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.scss'
})
export class PageBannerComponent {
  @Input() title?: string;
  @Input() text?: string;
  @Input() buttonText?: string;
  @Input() imageUrl?: string;
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }


}
