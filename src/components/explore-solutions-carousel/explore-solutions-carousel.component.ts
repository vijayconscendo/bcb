import { Component} from '@angular/core';
import { DynamicSwiperComponent } from "../generic-components/dynamic-swiper/dynamic-swiper.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-solutions-carousel',
  imports: [CommonModule, DynamicSwiperComponent],
  templateUrl: './explore-solutions-carousel.component.html',
  styleUrl: './explore-solutions-carousel.component.scss',
})
export class ExploreSolutionsCarouselComponent {

  customBreakpoints = {
    640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 32,
  },
}

solutioncards = [
  { title: 'Bank', image: 'assets/images/icons/bank-img.png' },
  { title: 'Borrow', image: 'assets/images/icons/borrow-img.png' },
  { title: 'Save & Invest', image: 'assets/images/icons/grow-img.png' },
  { title: 'Insure', image: 'assets/images/icons/insure-img.png' },
  { title: 'Business', image: 'assets/images/icons/insure-img.png' },
  { title: 'Grow', image: 'assets/images/icons/insure-img.png' },
];

solutionOptions: { [key: string]: string[] } = {
  'Bank': [
    'Business bank accounts',
    'Trust accounts',
    'Business and corporate credit cards',
    'Foreign exchange',
    'Shariah banking',
    'Attorney trust account',
    'Our cards',
    'Business current account',
    'Save and invest',
  ],
  'Borrow': [
    'Business loans',
    'Vehicle & asset financing',
    'Commercial property financing',
    'Specialised financing',
    'Loan calculator'
  ],
  'Save & Invest': [
    'Savings accounts',
    'Fixed deposits',
    'Investment funds',
    'Retirement plans'
  ],
  'Insure': [
    'Your business',
    'Loans',
    'Corporate risk',
    'Your agri business',
    'Your vehicles'
  ],
  'Grow': [
    'Business investments and savings accounts',
  ],
  'Business': [
    'Workplace solutions',
    'Fleet management',
    'Trade Suite',
    'Specialised',
    'Industry'
  ]
};

  selectedSolution: any = null;
  selectedButton: string | null = null;

  constructor(private router: Router) {}

  openModal(solution: any) {
    this.selectedSolution = solution;
    this.selectedButton = null;
    // Open modal via JS if needed
  }

  selectButton(btn: string) {
    this.selectedButton = btn;
  }

routeMap: { [key: string]: string } = {
  // Bank
  'Business bank accounts': '/bank-with-us/business-bank-accounts',
  'Trust accounts': '/bank-with-us/trust-account',
  'Business and corporate credit cards': '/bank-with-us/corporate-credit-cards',
  'Foreign exchange': '/bank-with-us/foreign-exchange',
  'Shariah banking': '/bank-with-us/shariah-banking',
  'Attorney trust account' : '/bank-with-us/attorney-trust-account',
  'Our cards' : '/bank-with-us/our-cards',
  'Business current account': '/bank-with-us/business-current-account',
  'Save and invest': '/bank-with-us/save-and-invest',
  // Borrow
  'Business loans': '/borrow-for-your-needs/business-loans',
  'Vehicle & asset financing': '/borrow-for-your-needs/vehicle-and-asset-finance',
  'Commercial property financing': '/borrow-for-your-needs/commercial-property-financing',
  'Specialised financing': '/borrow-for-your-needs/specialised-financing',
  'Loan calculator': '/borrow-for-your-needs/loan-calculator',
  // Save & Invest
  'Savings accounts': '/saving-and-investment-accounts/savings-accounts',
  'Fixed deposits': '/saving-and-investment-accounts/fixed-deposits',
  'Investment funds': '/saving-and-investment-accounts/investment-funds',
  'Retirement plans': '/saving-and-investment-accounts/retirement-plans',
  // Insure
  'Your business': '/insure-what-matters/small-business-insurance',
  'Loans': '/insure-what-matters/owner-loan-protection-plan',
  'Corporate risk': '/insure-what-matters/corporate-risk-management-and-insurance',
  'Your agri business': '/insure-what-matters/your-agri-business',
  'Your vehicles': '/insure-what-matters/your-vehicles',
  // Business
  'Workplace solutions': '/business-solutions/workplace-solutions',
  'Fleet management': '/business-solutions/fleet-management',
  'Trade Suite': '/business-solutions/trade-suite',
  'Specialised': '/business-solutions/specialised',
  'Industry': '/business-solutions/industry',
  'Merchant Solutions': '/business-solutions/merchant-solutions',
  // Grow
  'Business investments and savings accounts': '/grow-your-money/saving-and-investment-accounts/our-accounts',

};

next() {
  if (this.selectedButton) {
    const route = this.routeMap[this.selectedButton];
    if (route) {
      // Hide the modal using Bootstrap's JS API
      const modal = document.getElementById('selectSolutionModal');
      if (modal) {
        // @ts-ignore
        window.bootstrap?.Modal.getOrCreateInstance(modal).hide();
      }
      this.router.navigate([route]);
    } else {
      alert('No route mapped for this option.');
    }
  }
}
}
