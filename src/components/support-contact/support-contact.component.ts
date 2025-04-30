import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-support-contact',
  imports: [CommonModule],
  templateUrl: './support-contact.component.html',
  styleUrl: './support-contact.component.scss'
})
export class SupportContactComponent {
  isSubscribed = false; 

  toggleIsSubscribed() {
    this.isSubscribed = !this.isSubscribed;
  }
}
