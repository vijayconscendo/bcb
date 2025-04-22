import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


  // countries.ts
  const countries = [
    { name: 'South Africa', code: 'za' },
    { name: 'United States', code: 'us' },
    { name: 'India', code: 'in' },
    { name: 'Germany', code: 'de' },
    { name: 'France', code: 'fr' },
    { name: 'Japan', code: 'jp' },
    { name: 'United Kingdom', code: 'gb' },
  ];

@Component({
  selector: 'app-exchange-rate',
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './exchange-rate.component.html',
  styleUrl: './exchange-rate.component.scss'
})
export class ExchangeRateComponent {


  isFocused = false;
  countryList = countries;
  // selectedCountry: any;
  selectedCountry = this.countryList[0];
}
