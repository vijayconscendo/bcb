import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-search',
  imports: [],
  templateUrl: './custom-search.component.html',
  styleUrl: './custom-search.component.scss'
})
export class CustomSearchComponent {
  @Input() placeholder: string = 'Search';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
