import { Component, input } from '@angular/core';
import { User } from '../user';

import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: User = {
    id: -1,
    name: '',
    salary: 0,
    date: '2002-09-29',
  };
  @Output() deleteCommand = new EventEmitter();
  @Output() editCommand = new EventEmitter();
}
