import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-getstarted',
  imports: [NgSelectModule, FormsModule],
  templateUrl: './getstarted.component.html',
  styleUrl: './getstarted.component.scss'
})
export class GetstartedComponent {
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
