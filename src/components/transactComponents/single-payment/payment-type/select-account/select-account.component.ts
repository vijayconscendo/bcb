import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-select-account',
  imports: [CommonModule,FormsModule, NgSelectModule],
  templateUrl: './select-account.component.html',
  styleUrl: './select-account.component.scss'
})
export class SelectAccountComponent {
  // Account data
  selectedAccount: any = null; // Changed from empty string to null for better placeholder handling
  // any = { name: 'BUSINESS CURRENT ACCOUNT', number: '000010000053536', balance: 'R1 364 201.24' };
  accounts = [
    { name: 'BUSINESS CURRENT ACCOUNT', number: '000010000053536', balance: 'R1 364 201.24' },
    { name: 'BUSINESS SAVINGS ACCOUNT', number: '000010000053537', balance: 'R2 500 000.00' },
    { name: 'BUSINESS INVESTMENT ACCOUNT', number: '000010000053538', balance: 'R5 000 000.00' }
  ];

}
