import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-intro-card',
  imports: [CommonModule],
  templateUrl: './page-intro-card.component.html',
  styleUrl: './page-intro-card.component.scss'
})
export class PageIntroCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() showButtons: boolean = true;
  @Input() className: string = '';


  @Input() primaryButtonLabel: string = 'Learn More';
  @Input() primaryOutlineButtonLabel: string = 'Learn More';
  @Input() primaryButtonLink: string = '#';
  @Input() primaryOutlineButtonLink: string = '#';
}
