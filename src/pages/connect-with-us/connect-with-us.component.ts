import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-connect-with-us',
  imports: [NgSelectModule, FormsModule],
  templateUrl: './connect-with-us.component.html',
  styleUrl: './connect-with-us.component.scss'
})
export class ConnectWithUsComponent {

  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Home & Kitchen' }
  ];
  selectedCategory: any;
}
