import { Routes } from '@angular/router';
import { BankWithUsComponent } from './bank-with-us.component';
import { BusinessBankAccountsComponent } from '../../components/bankWithUsComponents/business-bank-accounts/business-bank-accounts.component';
import { BankWithUsHomeComponent } from '../../components/bankWithUsComponents/bank-with-us-home/bank-with-us-home.component';
import { BusinessCurrentAccountComponent } from '../../components/bankWithUsComponents/business-current-account/business-current-account.component';
import { SaveAndInvestComponent } from '../../components/bankWithUsComponents/save-and-invest/save-and-invest.component';
import { AttorneyTrustAccountComponent } from '../../components/bankWithUsComponents/attorney-trust-account/attorney-trust-account.component';
import { ForeignExchangeComponent } from '../../components/bankWithUsComponents/foreign-exchange/foreign-exchange.component';
import { ShariahBankingComponent } from '../../components/bankWithUsComponents/shariah-banking/shariah-banking.component';
import { OurCardsComponent } from '../../components/bankWithUsComponents/our-cards/our-cards.component';

export const bankWithUsRoutes: Routes = [

  {
    path: 'bank-with-us',
    component: BankWithUsComponent,
    children: [
      { path: '', component: BankWithUsHomeComponent },
      { path: 'business-bank-accounts', component: BusinessBankAccountsComponent },
      { path: 'business-current-account', component: BusinessCurrentAccountComponent },
      { path: 'save-and-invest', component: SaveAndInvestComponent },
      { path: 'attorney-trust-account', component: AttorneyTrustAccountComponent },
      { path: 'foreign-exchange', component: ForeignExchangeComponent },
      { path: 'shariah-banking', component: ShariahBankingComponent },
      { path: 'our-cards', component: OurCardsComponent },
    ]
  }
];