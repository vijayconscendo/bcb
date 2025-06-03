import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { LoanCalculatorResultsComponent } from './loan-calculator-results/loan-calculator-results.component';

@Component({
  selector: 'app-loan-calculator',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    BreadcrumbComponent, 
    PageIntroComponent, 
    LoanCalculatorResultsComponent
  ],
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.scss'
})
export class LoanCalculatorComponent implements OnInit {
  // Loan input values
  loanAmount: number = 300000;
  loanTerm: number = 60;
  interestRate: number = 20.50;
  
  // Result values
  monthlyRepayment: number = 0;
  formattedLoanAmount: string = '';
  firstRepaymentDate: string = '';
  
  // Min and max values for sliders
  minLoanAmount: number = 10000;
  maxLoanAmount: number = 6000000;
  minTerm: number = 12;
  maxTerm: number = 84;
  minRate: number = 10;
  maxRate: number = 30;
  
  // UI state
  currentStep: number = 1;

  ngOnInit() {
    this.calculateRepayment();
    this.setFirstRepaymentDate();
    this.formatLoanAmount();
  }

  calculateRepayment() {
    // Convert annual interest rate to monthly decimal rate
    const monthlyInterestRate = this.interestRate / 100 / 12;
    
    // Calculate monthly payment using the formula:
    // P = L[r(1+r)^n]/[(1+r)^n-1]
    // P = Monthly Payment, L = Loan Amount, r = monthly interest rate, n = number of payments
    
    if (monthlyInterestRate === 0) {
      this.monthlyRepayment = this.loanAmount / this.loanTerm;
    } else {
      const numerator = this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.loanTerm);
      const denominator = Math.pow(1 + monthlyInterestRate, this.loanTerm) - 1;
      this.monthlyRepayment = numerator / denominator;
    }
  }

  setFirstRepaymentDate() {
    // Set the first repayment date to be one month from today
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    
    // Format date as "1 July 2025" (example)
    const day = 1;
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    
    this.firstRepaymentDate = `${day} ${month} ${year}`;
  }
  
  formatLoanAmount() {
    // Format loan amount with spaces for thousands separator: e.g., 300 000
    this.formattedLoanAmount = this.loanAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  
  onLoanAmountChange(value: number) {
    this.loanAmount = value;
    this.calculateRepayment();
    this.formatLoanAmount();
  }
  
  onLoanTermChange(value: number) {
    this.loanTerm = value;
    this.calculateRepayment();
  }
  
  onInterestRateChange(value: number) {
    this.interestRate = value;
    this.calculateRepayment();
  }
  
  moveToStep(step: number) {
    this.currentStep = step;
  }
    resetCalculator() {
    this.loanAmount = 300000;
    this.loanTerm = 60;
  }
  
  applyForLoan() {
    console.log('Applying for loan with amount:', this.loanAmount, 'term:', this.loanTerm, 'months, interest rate:', this.interestRate, '%');
    // Here you would implement the actual loan application process
    // For example, navigate to an application form or open a modal
    this.interestRate = 20.50;
    this.calculateRepayment();
    this.formatLoanAmount();
  }
}
