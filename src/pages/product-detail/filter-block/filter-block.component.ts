import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-filter-block',
  imports: [CalendarModule, FormsModule],
  templateUrl: './filter-block.component.html',
  styleUrl: './filter-block.component.scss'
})
export class FilterBlockComponent {
  selectedDateFrom: any;
  selectedDateTo: any;

    constructor() {
    this.selectedDateFrom = new Date();
    this.selectedDateTo = new Date();
  }

}
