import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StoreImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-page-promo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-promo-card.component.html',
  styleUrl: './page-promo-card.component.scss'
})
export class PagePromoCardComponent {
  @Input() title: string = 'Online Banking';
  @Input() description: string = 'Bank anytime, anywhere with our secure online banking platform';
  @Input() noteText: string = '';
  @Input() imageSrc: string = 'assets/images/media/online-banking-bnr-img.jpg';
  @Input() imageAlt: string = 'Online Banking';
  @Input() storeImages: StoreImage[] = [];
  @Input() outlineBtnVisible: boolean = true;
  @Input() outlineBtnText: string = 'REGISTER';
  @Input() outlineBtnLink: string = '#';
  @Input() primaryBtnVisible: boolean = true;
  @Input() primaryBtnText: string = 'SIGNIN';
  @Input() primaryBtnLink: string = '#';
}
