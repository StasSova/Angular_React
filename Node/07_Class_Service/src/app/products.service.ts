import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  products: any[] = [
    {
      name: 'pr1',
      isBuy: false,
    },
    {
      name: 'pr2',
      isBuy: false,
    },
    {
      name: 'pr3',
      isBuy: false,
    },
  ];
  addProduct(name: string) {
    this.products.push({
      name: name,
      isBuy: false,
    });
  }
  print() {
    console.log(this.products);
  }
}
