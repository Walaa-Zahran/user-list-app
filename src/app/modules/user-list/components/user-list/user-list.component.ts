import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserList } from '../../../../shared/models/user-list.interface';
import { ApiResponse } from '../../../../shared/models/api-response.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('300ms ease-out', style({ opacity: 1 }))]),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  user!: UserList[];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.http
      .get<ApiResponse>(`https://reqres.in/api/users`)
      .subscribe((data) => {
        this.user = data.data;
        console.log('uset', this.user);
      });
  }
}
