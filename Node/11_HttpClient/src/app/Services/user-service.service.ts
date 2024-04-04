import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private api: HttpClient) {}

  getUsers() {
    return this.api.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
