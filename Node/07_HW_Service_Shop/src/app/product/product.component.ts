import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter();
}
