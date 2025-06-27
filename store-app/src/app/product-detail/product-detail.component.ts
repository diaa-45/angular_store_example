import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [RouterModule,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  constructor(
    private route: ActivatedRoute,
    private svc: ProductService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.svc.getById(+params['id']);
    });
  }
}