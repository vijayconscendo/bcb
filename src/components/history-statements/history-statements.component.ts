import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history-statements',
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './history-statements.component.html',
  styleUrl: './history-statements.component.scss'
})
export class HistoryStatementsComponent {

  accounts = [
    { id: 1, name: 'MyMoBiz Account **** 1234' },
    { id: 2, name: 'MyMoBiz Account **** 5678' },
    { id: 3, name: 'MyMoBiz Account **** 9101' }
  ];
  selectedAccount: any;
  
}
