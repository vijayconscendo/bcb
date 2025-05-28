// filepath: e:\STANDARD-BANK\SB-MALL-NEW\sb-mall\src\pages\ways-to-bank\ways-to-bank.routes.ts
import { Routes } from '@angular/router';
import { WaysToBankComponent } from './ways-to-bank.component';
import { OnlinebankingComponent } from '../../components/waysToBankComponents/onlinebanking/onlinebanking.component';
import { CellphoneBankingComponent } from '../../components/waysToBankComponents/cellphone-banking/cellphone-banking.component';
import { MobileAppBankingComponent } from '../../components/waysToBankComponents/mobile-app-banking/mobile-app-banking.component';
import { AtmBankingComponent } from '../../components/waysToBankComponents/atm-banking/atm-banking.component';
import { TelephoneAndSpeechBankingComponent } from '../../components/waysToBankComponents/telephone-and-speech-banking/telephone-and-speech-banking.component';
import { OnlineBankingForBusinessComponent } from '../../components/waysToBankComponents/online-banking-for-business/online-banking-for-business.component';
import { BusinessOnlineComponent } from '../../components/waysToBankComponents/business-online/business-online.component';

export const waysToBankRoutes: Routes = [
  {
    path: '',
    component: WaysToBankComponent,
    children: [
      {
        path: '',
        redirectTo: 'online-banking',
        pathMatch: 'full'
      },
      {
        path: 'online-banking',
        component: OnlinebankingComponent
      },
      {
        path: 'cellphone-banking',
        component: CellphoneBankingComponent
      },
      {
        path: 'mobile-app-banking',
        component: MobileAppBankingComponent
      },
      {
        path: 'atm-banking',
        component: AtmBankingComponent
      },
      {
        path: 'telephone-and-speech-banking',
        component: TelephoneAndSpeechBankingComponent
      },
      {
        path: 'online-banking-for-business',
        component: OnlineBankingForBusinessComponent
      },
      {
        path: 'business-online',
        component: BusinessOnlineComponent
      }
    ]
  }
];