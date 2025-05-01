import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-digitalhub-push-slider',
  imports: [CommonModule],
  templateUrl: './digitalhub-push-slider.component.html',
  styleUrl: './digitalhub-push-slider.component.scss'
})
export class DigitalhubPushSliderComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
