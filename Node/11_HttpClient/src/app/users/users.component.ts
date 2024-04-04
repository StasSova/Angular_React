import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users!: Observable<any>;
  constructor(private api: UserServiceService) {}
  ngOnInit(): void {
    this.users = this.api.getUsers();
  }
}
