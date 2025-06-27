// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
   { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoryProductsComponent },
  { path: 'categories/:catId/product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: 'categories' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
