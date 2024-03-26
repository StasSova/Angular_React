import { Component } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  products = [
    { name: 'Сок', price: 50, quantity: 23 },
    { name: 'Чай', price: 25, quantity: 5 },
    { name: 'Vodka', price: 125, quantity: 1 },
    { name: 'Кофе', price: 75, quantity: 14 },
  ];
  selectedProducts: { name: string; price: number; quantity: number }[] = [];

  isInCart(productName: string): boolean {
    return this.selectedProducts.some((item) => item.name === productName);
  }

  addToCart(index: number) {
    const existingProductIndex = this.selectedProducts.findIndex(
      (item) => item.name === this.products[index].name
    );

    if (existingProductIndex !== -1) {
      this.selectedProducts[existingProductIndex].quantity++;
      this.products[index].quantity--;
    } else {
      this.selectedProducts.push({ ...this.products[index], quantity: 1 });
      this.products[index].quantity--;
    }
  }
  removeFromCart(index: number) {
    const existingProductIndex = this.selectedProducts.findIndex(
      (item) => item.name === this.products[index].name
    );

    if (existingProductIndex !== -1) {
      if (this.selectedProducts[existingProductIndex].quantity > 1) {
        this.selectedProducts[existingProductIndex].quantity--;
        this.products[index].quantity++;
      } else {
        this.selectedProducts.splice(existingProductIndex, 1);
        this.products[index].quantity++;
      }
    }
  }

  getTotalPrice() {
    return this.selectedProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
