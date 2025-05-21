import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImageHeadingCardComponent } from '../../generic-components/image-heading-card/image-heading-card.component';
import { MymobizAccountCardComponent } from '../../generic-components/mymobiz-account-card/mymobiz-account-card.component';
import { PageBannerComponent } from "../../generic-components/page-banner/page-banner.component";
import { PageIntroComponent } from "../../generic-components/page-intro/page-intro.component";
import { ImageHeadingCard } from "../../../models/image-heading-card.model"

interface BankingProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  badge: string;
  pricetenure: string;
  featured?: boolean;
}


@Component({
  selector: 'app-business-bank-accounts',
  imports: [CommonModule, RouterLink, MymobizAccountCardComponent, ImageHeadingCardComponent, PageBannerComponent, PageIntroComponent],
  templateUrl: './business-bank-accounts.component.html',
  styleUrl: './business-bank-accounts.component.scss'
})
export class BusinessBankAccountsComponent {

  tabs = [
    { id: 'start-business', label: 'Starting a new business' },
    { id: 'manage-business', label: 'Managing your business' },
    { id: 'grow-business', label: 'Growing your business' },
  ];
  currentTab: string = this.tabs[0].id;

  bankingProducts: BankingProduct[] = [
    {
      id: 1,
      title: 'MyMoBiz Account',
      description: 'Simple affordable banking for small businesses. Get everything you need to run your business with MyMoBiz. Manage your finances on the go and get dedicated support from a team of business bankers. Apply for your business account today and set your business up for success.',
      price: '9',
      pricetenure: 'Monthly fee',
      badge: 'Pay as you transact',
      featured: true
    },
    {
      id: 2,
      title: 'MyMoBiz Plus Account',
      description: 'A business account that is tailored to fit your growing business banking needs. MyMoBiz Plus is an all-in-one solution that puts banking at your fingertips with a bundle of products and services at a fixed monthly service fee. Apply for your business account now and stay in control of your banking.',
      price: '165',
      pricetenure: 'Monthly fee',
      badge: 'Bundle offering'
    },
    {
      id: 3,
      title: 'Business Current Account',
      description: 'Run your business with a business bank account that lets you manage your money and transact 24/7 from your Banking App or Internet Banking. Our business current account gives you access to secure electronic transfers, pre-paid purchases and payments, and allows you to boost your business’s cashflow with tailored business lending solutions.',
      price: '95',
      pricetenure: 'Min Monthly fee',
      badge: ''
    },
    {
      id: 4,
      title: 'Bizlaunch Account',
      description: 'Comprehensive banking package including dedicated relationship manager, premium cards, and preferential rates on loans and other banking services.',
      price: '300',
      pricetenure: 'Monthly fee',
      badge: ''
    },
    {
      id: 5,
      title: 'Bizlaunch Plus Account',
      description: 'Start, manage, and grow your business with a business account that gives you added benefits, extensive support, and competitive pricing. \nDo your banking on our secure, fast digital banking platform, and access a dedicated team of Relationship Managers and Online Banking support.',
      price: '680',
      pricetenure: 'Monthly fee',
      badge: ''
    },
    {
      id: 6,
      title: 'Attorney Trust account',
      description: 'Manage client funds in trust with a bank account that ticks all the legal boxes while earning interest.',
      price: '93',
      pricetenure: 'Monthly fee',
      badge: ''
    },
    {
      id: 7,
      title: 'Third-Party Fund Admin',
      description: 'Manage funds for multiple accounts from a single bank account that offers competitive rates on term deposits, top-notch security and automated facilities.',
      price: '',
      pricetenure: '',
      badge: ''
    },
    {
      id: 8,
      title: 'Executor’s Current Account',
      description: 'Manage third-party estates online with a bank account for executors, attorneys, accounting firms, administrators, liquidators or curators.',
      price: '70',
      pricetenure: 'Monthly fee',
      badge: ''
    },
    {
      id: 9,
      title: 'Property Practitioners Trust Account',
      description: 'Seamlessly manage third-party funds with a specialised Trust account. ',
      price: '70',
      pricetenure: 'Monthly fee',
      badge: ''
    }
  ];


    imageHeadingCardsData: ImageHeadingCard[] = [
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Confidence',
      description: 'Rely on fast, secure transactions, local or international, online or by card'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Expert help',
      description: 'Speak to experienced business bankers who specialise in your sector'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Online anytime',
      description: 'Manage your account, payments and collections whenever you need to'
    },
    {
      imageUrl: 'assets/images/icons/dummy-shield.png',
      title: 'Cross-border',
      description: 'Do your banking through our vast African network wherever you do business'
    }
  ];
}
