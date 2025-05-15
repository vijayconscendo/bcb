import { Component, ViewEncapsulation } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [DatePickerModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DatePickerComponent {
  date: Date | undefined;

  yearRange: string = '2000:2030';
}
