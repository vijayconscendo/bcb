export interface Product {
    id: number;
    type: 'bank' | 'borrow' | 'save_invest';
    title: string;
    description: string;
    featured?: boolean;
    imageUrl: string;
  }