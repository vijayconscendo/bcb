import { Routes } from '@angular/router';
import { ServiceRequestComponent } from './service-request.component';
import { NewServiceRequestComponent } from '../../components/new-service-request/new-service-request.component';
import { SuccessServiceRequestComponent } from '../../components/success-service-request/success-service-request.component';
import { FailedServiceRequestComponent } from '../../components/failed-service-request/failed-service-request.component';
import { CreateServiceRequestComponent } from '../../components/create-service-request/create-service-request.component';
import { ListServiceRequestComponent } from '../../components/list-service-request/list-service-request.component';

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
    ]
  }
];