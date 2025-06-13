import { Routes } from '@angular/router';
import { TransactComponent } from './transact.component';
import { SinglePaymentComponent } from '../../components/transactComponents/single-payment/single-payment.component';

export const transactRoutes: Routes = [
  {
    path: 'transact',
    component: TransactComponent,
    children: [
      { path: '', redirectTo: 'single-payment', pathMatch: 'full' },
      { path: 'single-payment', component: SinglePaymentComponent },
    ]
  }
];