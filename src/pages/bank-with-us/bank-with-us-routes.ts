import { Routes } from '@angular/router';
import { BankWithUsComponent } from './bank-with-us.component';
import { BusinessBankAccountsComponent } from '../../components/bankWithUsComponents/business-bank-accounts/business-bank-accounts.component';
import { BankWithUsHomeComponent } from '../../components/bankWithUsComponents/bank-with-us-home/bank-with-us-home.component';
import { VehicleAndAssetFinanceComponent } from '../../components/bankWithUsComponents/vehicle-and-asset-finance/vehicle-and-asset-finance.component';
import { BusinessCurrentAccountComponent } from '../../components/bankWithUsComponents/business-current-account/business-current-account.component';
import { SaveAndInvestComponent } from '../../components/bankWithUsComponents/save-and-invest/save-and-invest.component';

export const bankWithUsRoutes: Routes = [

  {
    path: 'bank-with-us',
    component: BankWithUsComponent,
    children: [
      { path: '', component: BankWithUsHomeComponent },
      { path: 'business-bank-accounts', component: BusinessBankAccountsComponent },
      { path: 'vehicle-and-asset-finance', component: VehicleAndAssetFinanceComponent },
      { path: 'business-current-account', component: BusinessCurrentAccountComponent },
      { path: 'save-and-invest', component: SaveAndInvestComponent },
    ]
  }
];