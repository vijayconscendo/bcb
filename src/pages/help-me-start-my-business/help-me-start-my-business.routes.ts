import { Routes } from '@angular/router';
import { HelpMeStartMyBusinessComponent } from './help-me-start-my-business.component';
import { ArticleListComponent } from '../../components/startMyBusinessComponents/article-list/article-list.component';
import { ThingsToKnowComponent } from '../../components/startMyBusinessComponents/things-to-know/things-to-know.component';
import { SmallBusinessesComponent } from '../../components/startMyBusinessComponents/small-businesses/small-businesses.component';
import { ChargebacksComponent } from '../../components/startMyBusinessComponents/chargebacks/chargebacks.component';
import { StartupComponent } from '../../components/startMyBusinessComponents/startup/startup.component';

export const helpMeStartMyBusinessRoutes: Routes = [
  {
    path: 'help-me-start-my-business',
    component: HelpMeStartMyBusinessComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'articles/12-things-to-know-before-starting-your-own-business', component: ThingsToKnowComponent },
      { path: 'articles/3-ways-small-businesses-can-protect-themselves-financially', component: SmallBusinessesComponent },
      { path: 'articles/get-familiar-with-chargebacks-and-fraud-claims', component: ChargebacksComponent },
      { path: 'articles/3-characteristics-of-successful-start-up-founders', component: StartupComponent },
    ]
  }
];