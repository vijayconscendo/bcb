import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-unauth-solution-grid',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './unauth-solution-grid.component.html',
  styleUrl: './unauth-solution-grid.component.scss',

})
export class UnauthSolutionGridComponent {
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      // Filter out the featured product from the grid
      this.products = products;
    });
  }
}
