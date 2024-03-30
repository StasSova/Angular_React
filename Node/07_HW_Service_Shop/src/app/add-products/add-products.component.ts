import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces';

import { ShopCartService } from '../service/shop-cart.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css',
})
export class AddProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct!: Product;

  constructor(
    private cart: ShopCartService,
    private prodService: ProductsService
  ) {
    this.cleanProduct();
  }
  private cleanProduct() {
    this.newProduct = {
      name: '',
      price: 0,
      quantity: 0,
      image: '',
      id: -1,
    };
  }

  ngOnInit(): void {
    this.products = this.prodService.products;
  }

  onAddProduct() {
    this.prodService.addProduct(this.newProduct);
    console.log('Adding product:', this.newProduct);
    this.cleanProduct();
  }

  onSaveProduct() {
    // Добавить логику для сохранения продукта
    this.prodService.editProduct(this.newProduct.id, this.newProduct);
    console.log('Saving product:', this.newProduct);
    this.cleanProduct();
  }

  onEdit(item: Product) {
    console.log('Edit product: ', this.newProduct);
    this.newProduct = { ...item };
  }
  onRemove(item: Product) {
    this.prodService.removeProduct(item);
  }
}
