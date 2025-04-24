import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-create-service-request',
  imports: [CommonModule,NgSelectModule, FormsModule, RouterModule],
  templateUrl: './create-service-request.component.html',
  styleUrl: './create-service-request.component.scss'
})
export class CreateServiceRequestComponent {
  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Home & Kitchen' }
  ];

  selectedCategory: any;
}
