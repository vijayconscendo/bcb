import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-device-management',
  imports: [CommonModule],
  templateUrl: './device-management.component.html',
  styleUrl: './device-management.component.scss'
})
export class DeviceManagementComponent {
  isDeviceListAvailable: boolean = false;
}
