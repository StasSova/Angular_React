import { Component, OnInit } from '@angular/core';
import { ShopCartService } from '../service/shop-cart.service';
import { ProductsService } from '../service/products.service';
import { Product } from '../interfaces';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrl: './products-cart.component.css',
})
export class ProductsCartComponent implements OnInit {
  products: Product[];

  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];
  constructor(
    private cart: ShopCartService,
    private productService: ProductsService
  ) {
    this.products = this.cart.productsInCart;
  }
  ngOnInit(): void {}

  calculateTotal() {
    return this.cart.getTotalCost();
  }

  onAdd(prod: Product) {
    this.cart.addProduct(prod);
    this.productService.decreaseProductQuantity(prod);
  }

  onRem(prod: Product) {
    this.cart.removeProduct(prod);
    this.productService.addProduct(prod);
  }
}
