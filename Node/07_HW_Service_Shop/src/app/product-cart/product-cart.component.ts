import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../interfaces';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent implements OnInit {
  @Input() product!: Product;
  isCanAdd: boolean = true;
  @Output() addCount = new EventEmitter();
  @Output() remCount = new EventEmitter();
  ngOnInit(): void {
    this.isCanAdd =
      this.productService.getProductQuantityById(this.product.id) <= 0;
  }
  onAdd() {
    this.addCount.emit(this.product);

    let inStore = this.productService.getProductQuantityById(this.product.id);
    this.isCanAdd = inStore < 1;
    console.log('Stock:', inStore);
  }
  onRem() {
    this.remCount.emit(this.product);

    let inStore = this.productService.getProductQuantityById(this.product.id);
    this.isCanAdd = inStore < 1;
    console.log('Stock:', inStore);
  }
  constructor(private productService: ProductsService) {}
}
