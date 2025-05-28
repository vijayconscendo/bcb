import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { WelcomeSliderComponent } from '../digitalhubComponents/welcome-slider/welcome-slider.component';
import { CreateDigitalHubComponent } from '../digitalhubComponents/create-digital-hub/create-digital-hub.component';
// import { MoreLinksComponent } from '../digitalhubComponents/more-links/more-links.component';

@Component({
  selector: 'app-digitalhub-push-slider',
  imports: [
    CommonModule,
    // RouterOutlet,
    WelcomeSliderComponent,
    CreateDigitalHubComponent,
    // MoreLinksComponent,
  ],
  templateUrl: './digitalhub-push-slider.component.html',
  styleUrl: './digitalhub-push-slider.component.scss',
})
export class DigitalhubPushSliderComponent {
  sidebarToggle: boolean = false;
  shoHideSidebarToggle() {
    this.sidebarToggle = !this.sidebarToggle;
  }

  showCreateHubComponent = false;
  onShowCreateHubClicked() {
    this.showCreateHubComponent = true;
  }
}
