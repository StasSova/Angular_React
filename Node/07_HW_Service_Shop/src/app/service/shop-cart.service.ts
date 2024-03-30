import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShopCartService {
  productsInCart: Product[] = [];
  constructor() {}
  addProduct(product: Product) {
    const existingProductIndex = this.productsInCart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      this.productsInCart[existingProductIndex].quantity++;
    } else {
      this.productsInCart.push({ ...product, quantity: 1 });
    }
  }
  removeProduct(product: Product) {
    const existingProductIndex = this.productsInCart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      let prod = this.productsInCart[existingProductIndex];
      if (prod.quantity > 1) {
        prod.quantity--;
      } else {
        this.productsInCart.splice(existingProductIndex, 1);
      }
    }
  }
  getTotalCost(): number {
    return this.productsInCart.reduce(
      (total, product) => (total += product.price * product.quantity),
      0
    );
  }
  getTotalItems() {
    return this.productsInCart.reduce(
      (total, item) => (total += item.quantity),
      0
    );
  }
}
