import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ucount-sec',
  imports: [CommonModule, RouterLink],
  templateUrl: './ucount-sec.component.html',
  styleUrl: './ucount-sec.component.scss'
})
export class UcountSecComponent {
  @Input() imageUrl!: string;
  @Input() description!: string;
  @Input() buttonText!: string;
  @Input() buttonLink!: string;
  @Input() steps!: { number: number; title: string; content: string }[];
}
