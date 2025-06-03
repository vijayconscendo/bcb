import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  @Input() heading: string = '';
  @Input() description: string = '';
  @Input() buttonLabel!: string;
  @Input() buttonUrl!: string;
  @Input() openInNewTab: boolean = false;
}
