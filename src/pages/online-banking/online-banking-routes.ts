import { Routes } from '@angular/router';
import { OnlineBankingComponent } from './online-banking.component';
import { LoginComponent } from '../../components/onlineBankingComponents/login/login.component';

export const onlineBankingRoutes: Routes = [
  {
    path: '',
    component: OnlineBankingComponent,
    children: [
        // { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: '', component: LoginComponent },
    ]
  }
];