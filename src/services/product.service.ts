import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      type: 'bank',
      title: 'Business Current Account',
      description: 'Streamline your banking with a business account that gives you access to secure electronic transfers, prepaid purchases and more',
      featured: true,
      imageUrl: 'assets/images/cards/product-card.png'
    },
    {
      id: 2,
      type: 'bank',
      title: 'MyMoBiz Account',
      description: 'Access affordable banking with a business account that offers you dedicated support',
      imageUrl: 'assets/images/cards/product-card.png'
    },
    {
      id: 3,
      type: 'borrow',
      title: 'BizFlex Loan',
      description: 'Grow your business with this loan or access working capital, while repaying the loan as you earn revenue',
      imageUrl: 'assets/images/cards/product-card.png'
    },
    {
      id: 4,
      type: 'save_invest',
      title: 'Business Fixed Deposit Account',
      description: 'Get the certainty of a fixed rate for a fixed period on lump-sum deposits.',
      imageUrl: 'assets/images/cards/product-card.png'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getFeaturedProduct(): Observable<Product | undefined> {
    return of(this.products.find(product => product.featured));
  }

  getProductsByType(type: string): Observable<Product[]> {
    return of(this.products.filter(product => product.type === type));
  }
}