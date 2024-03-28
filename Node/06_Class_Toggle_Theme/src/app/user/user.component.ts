import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  search: string = '';
  users: User[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 },
    { name: 'David', age: 22 },
    { name: 'Eve', age: 35 },
    { name: 'Frank', age: 40 },
    { name: 'Grace', age: 27 },
    { name: 'Henry', age: 33 },
    { name: 'Ivy', age: 29 },
    { name: 'Jack', age: 32 },
    { name: 'Kate', age: 26 },
    { name: 'Leo', age: 31 },
    { name: 'Mia', age: 23 },
    { name: 'Nick', age: 38 },
    { name: 'Olivia', age: 36 },
    { name: 'Paul', age: 34 },
    { name: 'Quinn', age: 24 },
    { name: 'Ryan', age: 37 },
    { name: 'Sara', age: 39 },
    { name: 'Tom', age: 42 },
  ];
}
