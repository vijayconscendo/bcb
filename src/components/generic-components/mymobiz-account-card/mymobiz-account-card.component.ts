import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mymobiz-account-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mymobiz-account-card.component.html',
  styleUrls: ['./mymobiz-account-card.component.scss']
})
export class MymobizAccountCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() pricetenure: string = '';
  @Input() badge: string = '';
  
  addToCompare: boolean = false;
  isMobile: boolean = false;
  
  toggleCompare() {
    this.addToCompare = !this.addToCompare;
  }
  
  applyNow() {
    console.log('Apply now clicked for', this.title);
    // Add your application logic here
  }
  
  tellMore() {
    console.log('Tell me more clicked for', this.title);
    // Add navigation or modal logic here
  }

ngOnInit() {
  console.log('Badge:', this.badge);
}
}