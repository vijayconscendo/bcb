import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-featured-product',
  imports: [CommonModule],
  templateUrl: './featured-product.component.html',
  styleUrl: './featured-product.component.scss'
})
export class FeaturedProductComponent {
  featuredProduct?: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getFeaturedProduct().subscribe(product => {
      this.featuredProduct = product;
    });
  }
}
