import { Component, output, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Group } from '../classes';

@Component({
  selector: 'app-group-comp',
  templateUrl: './group-comp.component.html',
  styleUrl: './group-comp.component.css',
})
export class GroupCompComponent {
  @Input() group: Group;
  @Output() clickCommand = new EventEmitter();
  constructor() {
    this.group = new Group('', 0, '');
  }
}
