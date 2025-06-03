import { Routes } from '@angular/router';
import { MyMobizComponent } from './my-mobiz.component';
import { MyMobizAccountComponent } from '../../components/myMobizAccountComponents/my-mobiz-account/my-mobiz-account.component';
import { ApplyAccountComponent } from '../../components/myMobizAccountComponents/apply-account/apply-account.component';
import { AccountApplicationComponent } from '../../components/myMobizAccountComponents/account-application/account-application.component';

export const myMobizRoutes: Routes = [
  {
    path: 'my-mobiz-account',
    component: MyMobizComponent,
    children: [
      { path: '', component: MyMobizAccountComponent },
      { path: 'account-application', component: AccountApplicationComponent },
      { path: 'apply-account', component: ApplyAccountComponent },
    ]
  }
];