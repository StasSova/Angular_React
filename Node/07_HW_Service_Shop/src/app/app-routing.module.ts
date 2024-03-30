import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: ProductsCartComponent },
  { path: 'admin', component: AddProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
