import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  imports: [RouterModule,CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit {
  products: Product[] = [];
  catName = '';
  constructor(
    private route: ActivatedRoute,
    private svc: ProductService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.products = this.svc.getByCategory(id);
      this.catName = this.products.length ? this.products[0].categoryId === 1 ? 'Fruits' : 'Electronics' : '';
    });
  }
}