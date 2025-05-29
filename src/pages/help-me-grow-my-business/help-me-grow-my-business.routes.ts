import { Routes } from '@angular/router';
import { HelpMeGrowMyBusinessComponent } from './help-me-grow-my-business.component';

import { TailoredBankingComponent } from '../../components/growMyBusinessComponents/tailored-banking/tailored-banking.component';
import { CriticalWaysComponent } from '../../components/growMyBusinessComponents/critical-ways/critical-ways.component';
import { RightMarketingComponent } from '../../components/growMyBusinessComponents/right-marketing/right-marketing.component';
import { ConsumerBehaviourComponent } from '../../components/growMyBusinessComponents/consumer-behaviour/consumer-behaviour.component';
import { ArticleListComponent } from '../../components/growMyBusinessComponents/article-list/article-list.component';

export const helpMeGrowMyBusinessRoutes: Routes = [
  {
    path: 'help-me-grow-my-business',
    component: HelpMeGrowMyBusinessComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'articles/how-our-tailored-banking-solutions-can-benefit-your-accounting-practice', component: TailoredBankingComponent },
      { path: 'guides/support-structure-for-your-franchisees', component: CriticalWaysComponent },
      { path: 'guides/how-to-find-the-right-marketing-channel-for-your-target-market', component: RightMarketingComponent },
      { path: 'guides/how-to-influence-consumer-behaviour-with-behavioural-economics', component: ConsumerBehaviourComponent },
    ]
  }
];