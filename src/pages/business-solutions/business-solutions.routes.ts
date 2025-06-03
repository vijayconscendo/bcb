import { Routes } from '@angular/router';
import { BusinessSolutionsComponent } from './business-solutions.component';
import { WorkplaceSolutionsComponent } from '../../components/businessSolutionComponents/workplace-solutions/workplace-solutions.component';
import { SpecialisedComponent } from '../../components/businessSolutionComponents/specialised/specialised.component';
import { FleetManagementComponent } from '../../components/businessSolutionComponents/fleet-management/fleet-management.component';
import { MerchantSolutionsComponent } from '../../components/businessSolutionComponents/merchant-solutions/merchant-solutions.component';


export const businessSolutionsRoutes: Routes = [

  {
    path: 'business-solutions',  
    component: BusinessSolutionsComponent,
    children: [
        {path: '', redirectTo: 'workplace-solutions', pathMatch: 'full'},
        { path: 'workplace-solutions', component: WorkplaceSolutionsComponent },
        { path: 'specialised', component: SpecialisedComponent },
        { path: 'fleet-management', component: FleetManagementComponent },
        { path: 'industry', component: FleetManagementComponent },
        { path: 'merchant-solutions', component: MerchantSolutionsComponent }
    ]
  }
];