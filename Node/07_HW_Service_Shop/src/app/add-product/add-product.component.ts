import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  @Input() product!: Product;
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}
