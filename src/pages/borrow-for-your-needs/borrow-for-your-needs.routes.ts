import { Routes } from '@angular/router';
import { BorrowForYourNeedsComponent } from './borrow-for-your-needs.component';
import { BusinessLoansComponent } from '../../components/borrowComponents/business-loans/business-loans.component';
import { VehicleAndAssetFinanceComponent } from '../../components/borrowComponents/vehicle-and-asset-finance/vehicle-and-asset-finance.component';
import { CommercialPropertyFinancingComponent } from '../../components/borrowComponents/commercial-property-financing/commercial-property-financing.component';
import { SpecialisedFinancingComponent } from '../../components/borrowComponents/specialised-financing/specialised-financing.component';
import { LoanCalculatorComponent } from '../../components/borrowComponents/loan-calculator/loan-calculator.component';


export const borrowForYourNeeds: Routes = [

  {
    path: 'borrow-for-your-needs',  
    component: BorrowForYourNeedsComponent,
    children: [
    //   { path: '', component: BankWithUsHomeComponent },
        { path: 'business-loans', component: BusinessLoansComponent },
        { path: 'vehicle-and-asset-finance', component: VehicleAndAssetFinanceComponent },
        { path: 'commercial-property-financing', component: CommercialPropertyFinancingComponent },
        { path: 'specialised-financing', component: SpecialisedFinancingComponent },
        { path: 'loan-calculator', component: LoanCalculatorComponent },
    ]
  }
];