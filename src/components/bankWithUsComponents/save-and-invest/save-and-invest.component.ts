import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { CalendarModule } from 'primeng/calendar';
import { ToolbarOneComponent } from '../../generic-components/toolbar-one/toolbar-one.component';

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
  selector: 'app-save-and-invest',
  imports: [CommonModule, NgSelectModule, FormsModule, CalendarModule, ToolbarOneComponent],
  templateUrl: './save-and-invest.component.html',
  styleUrl: './save-and-invest.component.scss'
})
export class SaveAndInvestComponent {
  selectedDateFrom: any;
  selectedDateTo: any;
  isSearchFilter: boolean = false;
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
