import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterBlockComponent } from '../filter-block/filter-block.component';
import { CustomSearchComponent } from '../../../components/generic-components/custom-search/custom-search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

// accounts list
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
  selector: 'app-documents',
  imports: [CommonModule, FilterBlockComponent, CustomSearchComponent, NgSelectModule, FormsModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  selectedDateFrom: any;
  selectedDateTo: any;
  isSearchFilter: boolean = false;
  searchTerm = '';
  
  toggleSearchFilter(): void {
    this.isSearchFilter = !this.isSearchFilter;
  }

  constructor() {
    this.selectedDateFrom = new Date();
    this.selectedDateTo = new Date();
  }

  documents = [
    {
      date: '10 May 2025',
      category: 'Bank statement',
      description: 'Official bank statement',
      status: 'Stamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '15 April 2025',
      category: 'Bank statement',
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
      date: '5 March 2025',
      category: 'Tax certificate',
      description: 'Annual tax certificate',
      status: 'Stamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    },
    {
      date: '20 February 2025',
      category: 'Bank statement',
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
      date: '10 January 2025',
      category: 'Bank statement',
      description: 'Official bank statement',
      status: 'Stamped',
      icons: {
        email: 'assets/images/icons/send-icon.png',
        preview: 'assets/images/icons/preview-icon.png',
        download: 'assets/images/icons/download-icon-md.png',
        account: 'assets/images/icons/loan-account-icon.png',
      },
    }
  ];

  isFocused = false;
  accountList = accounts;
  selectedAccount: any;
}
