// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[] = [
    { id:1, name:'Apple', price:1.2, categoryId:1, description:'Fresh apple' },
    { id:2, name:'Orange', price:0.8, categoryId:1, description:'Juicy orange' },
    { id:3, name:'Laptop', price:999, categoryId:2, description:'A fast laptop' },
  ];
  getAll() { return this.products; }
  getByCategory(catId: number) {
    return this.products.filter(p => p.categoryId === catId);
  }
  getById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
