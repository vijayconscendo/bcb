import { Routes } from '@angular/router';
import { SavingAndInvestmentAccountsComponent } from './saving-and-investment-accounts.component';
import { OurAccountsComponent } from '../../components/savingAndInvestComponents/our-accounts/our-accounts.component';

export const savingAndInvestRoutes: Routes = [
  {
    path: 'saving-and-investment-accounts',
    component: SavingAndInvestmentAccountsComponent,
    children: [
      { path: '', redirectTo: 'our-accounts', pathMatch: 'full' },
      { path: 'our-accounts', component: OurAccountsComponent },
    ]
  }
];