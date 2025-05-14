import { Routes } from '@angular/router';
import { TradesuiteComponent } from './tradesuite.component';
import { TradesuiteLoginComponent } from '../../components/tradesuite-view/tradesuite-login/tradesuite-login.component';
import { TradesuiteDashboardComponent } from '../../components/tradesuite-view/tradesuite-dashboard/tradesuite-dashboard.component';

export const tradesuiteRoutes: Routes = [
  {
    path: '',
    component: TradesuiteComponent,
    children: [
    //   { path: '', redirectTo: 'new', pathMatch: 'full' },
         { path: 'login', component: TradesuiteLoginComponent },
         { path: 'dashboard', component: TradesuiteDashboardComponent }
    ]
  }
];