import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-search.component.html',
  styleUrl: './custom-search.component.scss'
})
export class CustomSearchComponent {
  @Input() placeholder: string = 'Search';
  @Input() searchValue: string = '';
  @Input() iconSrc: string = 'assets/images/icons/search-icon.png';
  @Input() iconAlt: string = 'search';
  
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(value: string): void {
    this.searchValue = value;
    this.searchChange.emit(value);
  }
}
