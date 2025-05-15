import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule, NgbCalendar, NgbDatepickerConfig   } from '@ng-bootstrap/ng-bootstrap';

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
  selector: 'app-unstamped-statements',
  imports: [CommonModule, NgSelectModule, FormsModule, NgbDatepickerModule ],
  templateUrl: './unstamped-statements.component.html',
  styleUrl: '../all-documents/all-documents.component.scss',
})
export class UnstampedStatementsComponent {
  selectedDate: any;
  isSearchFilter: boolean = false;

  toggleSearchFilter(): void {
    this.isSearchFilter = !this.isSearchFilter;
  }

  constructor(private calendar: NgbCalendar, private config: NgbDatepickerConfig) {
    // Customize calendar configuration
    this.config.navigation = 'select'; // Enables dropdown selectors for month/year
    this.config.showWeekNumbers = false;
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
        account: 'assets/images/icons/loan-account-icon.png'
      }
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
        account: 'assets/images/icons/loan-account-icon.png'
      }
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
        account: 'assets/images/icons/loan-account-icon.png'
      }
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
        account: 'assets/images/icons/loan-account-icon.png'
      }
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
        account: 'assets/images/icons/loan-account-icon.png'
      }
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
        account: 'assets/images/icons/loan-account-icon.png'
      }
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
        account: 'assets/images/icons/loan-account-icon.png'
      }
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
        account: 'assets/images/icons/loan-account-icon.png'
      }
    },

  ];

  isFocused = false;
  accountList = accounts;
  // selectedAccount: any;
  selectedAccount = this.accountList[0];



}
