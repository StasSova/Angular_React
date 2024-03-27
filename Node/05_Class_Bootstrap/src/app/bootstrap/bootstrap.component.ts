import { Component } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css'],
})
export class BootstrapComponent {
  currentUser: User = {
    id: -1,
    name: 'User Name',
    salary: 10000,
    date: '2002-09-29',
  };
  list: User[] = [
    { id: 1, name: 'User1', salary: 10000, date: '2024-12-12' },
    { id: 2, name: 'User2', salary: 20000, date: '2023-11-11' },
    { id: 3, name: 'User3', salary: 30000, date: '2022-10-10' },
  ];

  addToList() {
    const newId =
      this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1;
    this.currentUser.id = newId;
    this.list.push({ ...this.currentUser });
    this.resetCurrentUser();
  }

  removeItem(index: number) {
    this.list.splice(index, 1);
  }

  updateUser(user: User) {
    this.currentUser = { ...user };
  }

  saveChange() {
    const index = this.list.findIndex((x) => x.id === this.currentUser.id);
    if (index !== -1) {
      this.list[index] = { ...this.currentUser };
    }
    this.resetCurrentUser();
  }

  resetCurrentUser() {
    this.currentUser = {
      id: -1,
      name: 'User Name',
      salary: 10000,
      date: '2002-09-29',
    };
  }
}
