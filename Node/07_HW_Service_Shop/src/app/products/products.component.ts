import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../service/products.service';
import { ShopCartService } from '../service/shop-cart.service';
import { Product } from '../interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productsService: ProductsService,
    private cart: ShopCartService
  ) {}
  ngOnInit(): void {
    this.products = this.productsService.products;
  }

  addItem(item: Product) {
    this.cart.addProduct(item);
    this.productsService.decreaseProductQuantity(item);
    console.log(item.quantity);
  }
}
