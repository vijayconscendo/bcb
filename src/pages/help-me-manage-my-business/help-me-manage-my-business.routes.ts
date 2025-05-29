import { Routes } from '@angular/router';
import { HelpMeManageMyBusinessComponent } from './help-me-manage-my-business.component';
import { ArticleListComponent } from '../../components/manageBusinessComponents/article-list/article-list.component';
import { ScamGuideComponent } from '../../components/manageBusinessComponents/scam-guide/scam-guide.component';
import { LatePaymentsComponent } from '../../components/manageBusinessComponents/late-payments/late-payments.component';
import { BusinessSavingsComponent } from '../../components/manageBusinessComponents/business-savings/business-savings.component';
import { SavingTipsComponent } from '../../components/manageBusinessComponents/saving-tips/saving-tips.component';

export const helpMeManageBusinessRoutes: Routes = [
  {
    path: 'help-me-manage-my-business',
    component: HelpMeManageMyBusinessComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'guides/It-takes-a-phone-call-to-avoid-this-scam', component: ScamGuideComponent },
      { path: 'guides/how-to-effectively-deal-with-late-payments', component: LatePaymentsComponent },
      { path: 'guides/6-reasons-why-you-should-open-a-business-savings-account', component: BusinessSavingsComponent },
      { path: 'guides/6-energy-saving-tips-for-small-businesses', component: SavingTipsComponent },
    ]
  }
];