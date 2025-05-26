import { Routes } from '@angular/router';
import { ServiceRequestComponent } from './service-request.component';
import { NewServiceRequestComponent } from '../../components/serviceRequestComponents/new-service-request/new-service-request.component';
import { SuccessServiceRequestComponent } from '../../components/serviceRequestComponents/success-service-request/success-service-request.component';
import { FailedServiceRequestComponent } from '../../components/serviceRequestComponents/failed-service-request/failed-service-request.component';
import { CreateServiceRequestComponent } from '../../components/serviceRequestComponents/create-service-request/create-service-request.component';
import { ListServiceRequestComponent } from '../../components/serviceRequestComponents/list-service-request/list-service-request.component';
import { TrackRequestComponent } from '../../components/serviceRequestComponents/track-request/track-request.component';

export const serviceRequestRoutes: Routes = [
  {
    path: 'service-request',
    component: ServiceRequestComponent,
    children: [
      { path: '', redirectTo: 'new', pathMatch: 'full' },
      { path: 'new', component: NewServiceRequestComponent },
      { path: 'create', component: CreateServiceRequestComponent },
      { path: 'success', component: SuccessServiceRequestComponent },
      { path: 'list', component: ListServiceRequestComponent },
      { path: 'failed', component: FailedServiceRequestComponent },
      { path: 'track-request', component: TrackRequestComponent },
    ]
  }
];