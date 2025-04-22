import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FeaturedProductComponent } from '../featured-product/featured-product.component';


@Component({
  selector: 'app-unauth-solution-grid',
  imports: [CommonModule, ProductCardComponent, FeaturedProductComponent],
  templateUrl: './unauth-solution-grid.component.html',
  styleUrl: './unauth-solution-grid.component.scss',

})
export class UnauthSolutionGridComponent {
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      // Filter out the featured product from the grid
      this.products = products.filter(product => !product.featured);
    });
  }
}
