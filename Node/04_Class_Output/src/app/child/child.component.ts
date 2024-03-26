import { Component, output } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() product: any;
  @Input() isInCart: boolean = false;
  @Output() onChange = new EventEmitter();
  @Output() addToCart = new EventEmitter();
  @Output() removeFromCart = new EventEmitter();
  constructor() {}
}
