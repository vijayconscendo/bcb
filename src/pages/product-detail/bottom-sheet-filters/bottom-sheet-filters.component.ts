import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-bottom-sheet-filters',
  imports: [CommonModule ,CalendarModule, FormsModule],
  templateUrl: './bottom-sheet-filters.component.html',
  styleUrl: './bottom-sheet-filters.component.scss'
})
export class BottomSheetFiltersComponent {
  selectedDateFrom: any;
  selectedDateTo: any;
  isSearchFilter: boolean = false;
  // @ViewChild('calendar') calendar!: Calendar;
  toggleSearchFilter(): void {
    this.isSearchFilter = !this.isSearchFilter;
  }

  constructor() {
    this.selectedDateFrom = new Date();
    this.selectedDateTo = new Date();
  }
}
