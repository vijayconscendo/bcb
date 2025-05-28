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
  { title: 'Bank', image: 'assets/images/icons/insure-img.png' },
];

solutionOptions: { [key: string]: string[] } = {
  'Bank': [
    'Business bank accounts',
    'Trust accounts',
    'Business and corporate credit cards',
    'Foreign exchange',
    'Shariah banking'
  ],
  'Borrow': [
    'Business loans',
    'Overdrafts',
    'Asset finance',
    'Trade finance'
  ],
  'Save & Invest': [
    'Savings accounts',
    'Fixed deposits',
    'Investment funds',
    'Retirement plans'
  ],
  'Insure': [
    'Business insurance',
    'Employee benefits',
    'Asset insurance',
    'Liability insurance'
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
  'Trust accounts': '/trust-account',
  'Business and corporate credit cards': '/corporate-credit-cards',
  'Foreign exchange': '/foreign-exchange',
  'Shariah banking': '/shariah-banking',
  // Borrow
  'Business loans': '/business-loans',
  'Overdrafts': '/overdrafts',
  'Asset finance': '/asset-finance',
  'Trade finance': '/trade-finance',
  // Save & Invest
  'Savings accounts': '/savings-accounts',
  'Fixed deposits': '/fixed-deposits',
  'Investment funds': '/investment-funds',
  'Retirement plans': '/retirement-plans',
  // Insure
  'Business insurance': '/business-insurance',
  'Employee benefits': '/employee-benefits',
  'Asset insurance': '/asset-insurance',
  'Liability insurance': '/liability-insurance'
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
