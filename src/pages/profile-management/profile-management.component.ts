import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessDetailsComponent } from '../../components/profile-management-view/business-details/business-details.component';
import { NotificationsComponent } from '../../components/profile-management-view/notifications/notifications.component';
import { DeviceManagementComponent } from '../../components/profile-management-view/device-management/device-management.component';
import { ConsentsComponent } from '../../components/profile-management-view/consents/consents.component';


@Component({
  selector: 'app-profile-management',
  imports: [RouterModule, CommonModule, BusinessDetailsComponent, NotificationsComponent, DeviceManagementComponent, ConsentsComponent],
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.scss'
})
export class ProfileManagementComponent {

}
