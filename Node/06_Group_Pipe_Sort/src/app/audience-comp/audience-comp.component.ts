import { Component, output, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Audience } from '../classes';

@Component({
  selector: 'app-audience-comp',
  templateUrl: './audience-comp.component.html',
  styleUrl: './audience-comp.component.css',
})
export class AudienceCompComponent {
  @Input() audience: Audience;
  @Output() clickCommand = new EventEmitter();
  constructor() {
    this.audience = new Audience('', 0, '');
  }
}
