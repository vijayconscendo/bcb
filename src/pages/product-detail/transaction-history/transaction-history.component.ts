import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterBlockComponent } from '../filter-block/filter-block.component';
import { CustomSearchComponent } from '../../../components/generic-components/custom-search/custom-search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

// countries.ts
const accounts = [
  { name: 'Business Current Account **** 6098' },
  { name: 'Business Current Account **** 6098' },
  { name: 'Business Current Account **** 6098' },
  { name: 'Business Current Account **** 6098' },
  { name: 'Business Current Account **** 6098' },
  { name: 'Business Current Account **** 6098' },
  { name: 'Business Current Account **** 6098' },
  { name: 'Business Current Account **** 6098' },
];

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule, FilterBlockComponent, CustomSearchComponent, NgSelectModule, FormsModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss',
})
export class TransactionHistoryComponent {
  selectedDateFrom: any;
  selectedDateTo: any;
  isSearchFilter: boolean = false;
  searchTerm = '';
  // @ViewChild('calendar') calendar!: Calendar;
  toggleSearchFilter(): void {
    this.isSearchFilter = !this.isSearchFilter;
  }

  constructor() {
    this.selectedDateFrom = new Date();
    this.selectedDateTo = new Date();
  }
    documents = [
    {
      date: '1 May 2025',
      category: 'Previous statement',
      description: 'Official bank statement',
      status: 'Unstamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '1 April 2025',
      category: 'Previous statement',
      description: 'Official bank statement',
      status: 'Unstamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '1 March 2025',
      category: 'Previous statement',
      description: 'Official bank statement',
      status: 'Unstamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '1 April 2025',
      category: 'Previous statement',
      description: 'Official bank statement',
      status: 'Unstamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '1 March 2025',
      category: 'Previous statement',
      description: 'Official bank statement',
      status: 'Unstamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '1 April 2025',
      category: 'Previous statement',
      description: 'Official bank statement',
      status: 'Unstamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '1 March 2025',
      category: 'Previous statement',
      description: 'Official bank statement',
      status: 'Unstamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '1 April 2025',
      category: 'Previous statement',
      description: 'Official bank statement',
      status: 'Unstamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
  ];

  isFocused = false;
  accountList = accounts;
  selectedAccount: any;
  // selectedAccount = this.accountList[0];

}
