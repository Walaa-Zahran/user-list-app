// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../shared/services/shared.service';
import { UserServiceService } from '../../../../shared/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(
    private userService: UserServiceService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.currentPage.subscribe((page) => {
      this.loadUsers(page);
    });
  }

  loadUsers(page: number) {
    this.userService.getUsers(page).subscribe((users: any) => {
      this.users = users.data;
    });
  }
}
