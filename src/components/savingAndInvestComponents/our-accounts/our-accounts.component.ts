import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageBannerComponent } from '../../generic-components/page-banner/page-banner.component';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { ImageHeadingCardComponent } from "../../generic-components/image-heading-card/image-heading-card.component";
import { ImageHeadingCard } from '../../../models/image-heading-card.model';
import { MymobizAccountCardComponent } from "../../generic-components/mymobiz-account-card/mymobiz-account-card.component";
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { CtaComponent } from '../../generic-components/cta/cta.component';

interface BankingProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  badge: string;
  noteText: string;
  pricetenure: string;
  featured?: boolean;
  category: string;
}

@Component({
  selector: 'app-our-accounts',
  imports: [CommonModule, PageBannerComponent, BreadcrumbComponent, PageIntroComponent, ImageHeadingCardComponent, MymobizAccountCardComponent, CtaComponent],
  templateUrl: './our-accounts.component.html',
  styleUrl: './our-accounts.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
    animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class OurAccountsComponent {

    categoryTabs: string[] = ['All', 'Agricultural', 'Flexible', 'Term'];
  currentCategory: string = 'All';
  filteredProducts: BankingProduct[] = [];

    bankingProducts: BankingProduct[] = [
    {
      id: 1,
      title: 'MyMoBiz Account',
      description: 'Simple affordable banking for small businesses. Get everything you need to run your business with MyMoBiz. Manage your finances on the go and get dedicated support from a team of business bankers. Apply for your business account today and set your business up for success.',
      price: '9',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: 'Pay as you transact',
      featured: true,
      category: 'Flexible'
    },
    {
      id: 2,
      title: 'MyMoBiz Plus Account',
      description: 'A business account that is tailored to fit your growing business banking needs. MyMoBiz Plus is an all-in-one solution that puts banking at your fingertips with a bundle of products and services at a fixed monthly service fee. Apply for your business account now and stay in control of your banking.',
      price: '165',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: 'Bundle offering',
      category: 'Flexible'
    },
    {
      id: 3,
      title: 'Business Current Account',
      description: 'Run your business with a business bank account that lets you manage your money and transact 24/7 from your Banking App or Internet Banking. Our business current account gives you access to secure electronic transfers, pre-paid purchases and payments, and allows you to boost your business\'s cashflow with tailored business lending solutions.',
      price: '95',
      pricetenure: 'Min Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: '',
      category: 'Term'
    },
    {
      id: 4,
      title: 'Bizlaunch Account',
      description: 'Comprehensive banking package including dedicated relationship manager, premium cards, and preferential rates on loans and other banking services.',
      price: '300',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: '',
      category: 'Term'
    },
    {
      id: 5,
      title: 'Bizlaunch Plus Account',
      description: 'Start, manage, and grow your business with a business account that gives you added benefits, extensive support, and competitive pricing. \nDo your banking on our secure, fast digital banking platform, and access a dedicated team of Relationship Managers and Online Banking support.',
      price: '680',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: '',
      category: 'Term'
    },
    {
      id: 6,
      title: 'Attorney Trust account',
      description: 'Manage client funds in trust with a bank account that ticks all the legal boxes while earning interest.',
      price: '93',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: '',
      category: 'Agricultural'
    },
    {
      id: 7,
      title: 'Third-Party Fund Admin',
      description: 'Manage funds for multiple accounts from a single bank account that offers competitive rates on term deposits, top-notch security and automated facilities.',
      price: '',
      pricetenure: '',
      noteText: 'No monthly service fee for the first 3 months',
      badge: '',
      category: 'Agricultural'
    },
    {
      id: 8,
      title: 'Executor\'s Current Account',
      description: 'Manage third-party estates online with a bank account for executors, attorneys, accounting firms, administrators, liquidators or curators.',
      price: '70',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: '',
      category: 'Agricultural'
    },
    {
      id: 9,
      title: 'Property Practitioners Trust Account',
      description: 'Seamlessly manage third-party funds with a specialised Trust account. ',
      price: '70',
      pricetenure: 'Monthly fee',
      noteText: 'No monthly service fee for the first 3 months',
      badge: '',
      category: 'Agricultural'
    }
  ];

    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Competitive rates',
      description: 'Choose from a range of accounts offering guaranteed returns'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Flexible terms',
      description: 'Invest in lump sums or multiple deposits, with fixed or linked rates'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Capital guaranteed',
      description: 'Know that your contributions will never be at risk of loss'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'No monthly fees',
      description: 'Pay no management fees when you maintain the minimum balance'
    }
  ];

    ngOnInit(): void {
    this.filterProductsByCategory(this.currentCategory);
  }

  /**
   * Filter products by the selected category tab
   * @param category The selected category to filter by
   */
  filterProductsByCategory(category: string): void {
    this.currentCategory = category;
    
    if (category === 'All') {
      this.filteredProducts = [...this.bankingProducts];
    } else {
      this.filteredProducts = this.bankingProducts.filter(product => 
        product.category === category
      );
    }
  }

  /**
   * Get count of products for a specific category
   * @param category Category to count products for
   * @returns Number of products in the category
   */
  getProductCountByCategory(category: string): number {
    if (category === 'All') {
      return this.bankingProducts.length;
    }
    return this.bankingProducts.filter(product => product.category === category).length;
  }

}
