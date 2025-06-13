import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';
import { SummeryComponent } from './summery/summery.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-payment',
  imports: [CommonModule, BreadcrumbComponent, PaymentTypeComponent, ConfirmPaymentComponent, SummeryComponent],
  templateUrl: './single-payment.component.html',
  styleUrl: './single-payment.component.scss'
})
export class SinglePaymentComponent {
  currentStep: 'payment-type' | 'confirm-payment' | 'summary' = 'payment-type';

  onNext() {
    if (this.currentStep === 'payment-type') {
      this.currentStep = 'confirm-payment';
    } else if (this.currentStep === 'confirm-payment') {
      this.currentStep = 'summary';
    }
  }

  onConfirm() {
    this.currentStep = 'summary';
  }

  onBack() {
    if (this.currentStep === 'confirm-payment') {
      this.currentStep = 'payment-type';
    } else if (this.currentStep === 'summary') {
      this.currentStep = 'confirm-payment';
    }
  }
}
