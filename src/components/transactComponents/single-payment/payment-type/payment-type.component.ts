import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectAccountComponent } from './select-account/select-account.component';

@Component({
  selector: 'app-payment-type',
  imports: [CommonModule, FormsModule, NgSelectModule, SelectAccountComponent],
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
})
export class PaymentTypeComponent {
  @Output() next = new EventEmitter<void>();

  // Payment type selection
  selectedPaymentType: string = 'account';


  // Beneficiary form data
  selectedBeneficiary: any = null;
  beneficiaries = [
    { name: 'Select or enter a beneficiary name' },
    { name: 'Amy Carter' },
    { name: 'John Smith' },
    { name: 'Sarah Johnson' }
  ];

  currencies = [
    { name: 'ZAR' },
    { name: 'USD' },
    { name: 'EUR' },
    { name: 'GBP' }
  ];
  selectedCurrency: string = 'ZAR';

  beneficiaryName: string = 'Amy';
  beneficiarySurname: string = 'Carter';
  beneficiaryCell: string = '079 504 4280';
  beneficiaryEmail: string = 'amy.carter@address.com';
  accountName: string = 'Marks Tyre\'s Pty Ltd';
  beneficiaryBank: string = 'Standard Bank';
  branchCode: string = '05001';
  accountNumber: string = '89101921112922222222';

  // Payment details
  amount: string = '40 000.00';
  beneficiaryReference: string = 'New Toolset From Game';
  yourReference: string = 'New Toolset From Game';
  frequency: string = 'Once-off';
  
  frequencies = [
    { name: 'Once-off' },
    { name: 'Weekly' },
    { name: 'Monthly' },
    { name: 'Quarterly' }
  ];

  banks = [
    { name: 'Standard Bank' },
    { name: 'ABSA' },
    { name: 'FNB' },
    { name: 'Nedbank' },
    { name: 'Capitec' }
  ];

  // Save beneficiary details checkbox
  saveBeneficiaryDetails: boolean = false;

  onClear() {
    // Clear form logic
    this.beneficiaryName = '';
    this.beneficiarySurname = '';
    this.beneficiaryCell = '';
    this.beneficiaryEmail = '';
    this.accountName = '';
    this.branchCode = '';
    this.accountNumber = '';
    this.amount = '';
    this.beneficiaryReference = '';
    this.yourReference = '';
    this.saveBeneficiaryDetails = false;
  }

  onCancel() {
    // Cancel form logic
    console.log('Form cancelled');
  }

  onNext() {
    // Proceed to next step
    this.next.emit();
  }
}
