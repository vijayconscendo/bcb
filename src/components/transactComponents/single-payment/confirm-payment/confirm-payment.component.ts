import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-payment',
  imports: [],
  templateUrl: './confirm-payment.component.html',
  styleUrl: './confirm-payment.component.scss'
})
export class ConfirmPaymentComponent {
  @Output() confirm = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }
}
