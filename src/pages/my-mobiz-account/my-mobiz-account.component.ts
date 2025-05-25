import { Component } from '@angular/core';
import { PageIntroComponent } from "../../components/generic-components/page-intro/page-intro.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-mobiz-account',
  imports: [PageIntroComponent, NgSelectModule, FormsModule],
  templateUrl: './my-mobiz-account.component.html',
  styleUrl: './my-mobiz-account.component.scss'
})
export class MyMobizAccountComponent {
  selectyear = [
    { id: 1, name: '2020' },
    { id: 2, name: '2021' },
    { id: 3, name: '2022' },
    { id: 4, name: '2023' },
    { id: 4, name: '2024' },
    { id: 4, name: '2025' }
  ];
  selectedYear: any;
}
