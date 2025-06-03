import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-calculator-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loan-calculator-results.component.html',
  styleUrls: ['./loan-calculator-results.component.scss']
})
export class LoanCalculatorResultsComponent {
  @Input() monthlyRepayment: number = 0;
  @Input() loanAmount: string = '';
  @Input() firstRepaymentDate: string = '';
  @Input() currentStep: number = 1;
  
  @Output() applyNow = new EventEmitter<void>();
  
  onApplyNowClick() {
    this.applyNow.emit();
  }
}
