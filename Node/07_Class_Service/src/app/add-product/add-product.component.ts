import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  constructor(private service: ProductsService) {}
  products: any[] = [];
  name: string = '';

  ngOnInit(): void {
    this.products = this.service.products;
  }

  addProduct() {
    this.products.push({
      name: this.name,
      isBuy: true,
    });

    //this.service.addProduct(this.name + '_service');
    this.service.print();
  }
}
