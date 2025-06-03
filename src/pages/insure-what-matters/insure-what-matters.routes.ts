import { Routes } from '@angular/router';

import { InsureWhatMattersComponent } from './insure-what-matters.component';
import { SmallBusinessInsuranceComponent } from '../../components/insureComponents/small-business-insurance/small-business-insurance.component';
import { OwnerLoanProtectionPlanComponent } from '../../components/insureComponents/owner-loan-protection-plan/owner-loan-protection-plan.component';
import { CorporateRiskComponent } from '../../components/insureComponents/corporate-risk/corporate-risk.component';
import { YourAgriBusinessComponent } from '../../components/insureComponents/your-agri-business/your-agri-business.component';
import { YourVehiclesComponent } from '../../components/insureComponents/your-vehicles/your-vehicles.component';

export const InsureWhatMattersRoutes: Routes = [
  {
    path: 'insure-what-matters',
    component: InsureWhatMattersComponent,
    children: [
    //   { path: '', redirectTo: 'new', pathMatch: 'full' },
      { path: 'small-business-insurance', component: SmallBusinessInsuranceComponent },
      { path: 'owner-loan-protection-plan', component: OwnerLoanProtectionPlanComponent },
      { path: 'corporate-risk-management-and-insurance', component: CorporateRiskComponent },
      { path: 'your-agri-business', component: YourAgriBusinessComponent },
      { path: 'your-vehicles', component: YourVehiclesComponent },
    ]
  }
];