import { Routes } from '@angular/router';
import { ProfileManagementComponent } from './profile-management.component';
import { BusinessDetailsComponent } from '../../components/profile-management-view/business-details/business-details.component';
import { DeviceManagementComponent } from '../../components/profile-management-view/device-management/device-management.component';
import { NotificationsComponent } from '../../components/profile-management-view/notifications/notifications.component';
import { ConsentsComponent } from '../../components/profile-management-view/consents/consents.component';

export const profileManagementRoutes: Routes = [
  {
    path: 'profile-management',
    component: ProfileManagementComponent,
    children: [
      { path: '', redirectTo: 'business-details', pathMatch: 'full' },
      { path: 'business-details', component: BusinessDetailsComponent },
      { path: 'device-management', component: DeviceManagementComponent },
      { path: 'device-management', component: DeviceManagementComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'consents', component: ConsentsComponent },

    ]
  }
];

