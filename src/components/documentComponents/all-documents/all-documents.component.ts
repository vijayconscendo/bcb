import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

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
  selector: 'app-all-documents',
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './all-documents.component.html',
  styleUrl: './all-documents.component.scss'
})
export class AllDocumentsComponent {
  isFocused = false;
  accountList = accounts;
  selectedAccount: any;
  // selectedAccount = this.accountList[0];

  constructor(private router: Router) {}

  goToUnstampedStatements(){
    this.router.navigate(['/my-documents/unstamped-statements'])
  }
  
}
