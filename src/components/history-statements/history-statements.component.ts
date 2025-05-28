import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history-statements',
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './history-statements.component.html',
  styleUrl: './history-statements.component.scss'
})
export class HistoryStatementsComponent implements OnInit {

  accounts = [
    { id: 1, name: 'MyMoBiz Account **** 1234' },
    { id: 2, name: 'MyMoBiz Account **** 5678' },
    { id: 3, name: 'MyMoBiz Account **** 9101' }
  ];
  selectedAccount: any;
  
  // Mock data for transactions - empty array represents no data
  transactions: any[] = [];
  
  // Mock data for statements - empty array represents no data
  statements: any[] = [];
  
  // Computed properties to determine if data exists
  get hasTransactions(): boolean {
    return this.transactions && this.transactions.length > 0;
  }
  
  get hasStatements(): boolean {
    return this.statements && this.statements.length > 0;
  }
  
  ngOnInit(): void {
    // Initially set empty states (no data)
    this.transactions = [];
    this.statements = [];
  }
  
  // Demo: Method to toggle transaction data between empty and populated states
  toggleTransactions(): void {
    if (this.hasTransactions) {
      // Clear transactions to show empty state
      this.transactions = [];
    } else {
      // Add mock transactions to show populated state
      this.transactions = [
        { date: '1 Nov 2023', description: 'Vehicle Insurance_HondaJazz 2020', amount: '- R 100 000', type: 'debit' },
        { date: '2 Nov 2023', description: 'Salary Payment', amount: '+ R 50 000', type: 'credit' }
      ];
    }
  }
  
  // Demo: Method to toggle statement data between empty and populated states
  toggleStatements(): void {
    if (this.hasStatements) {
      // Clear statements to show empty state
      this.statements = [];
    } else {
      // Add mock statements to show populated state
      this.statements = [
        { date: '1 June 2024', title: 'Monthly formal statement', subtitle: 'Official bank statement' },
        { date: '1 May 2024', title: 'Monthly formal statement', subtitle: 'Official bank statement' }
      ];
    }
  }
}
