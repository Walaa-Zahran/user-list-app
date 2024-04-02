import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiResponse } from '../../../shared/models/api-response.interface';
import { UserServiceService } from '../../../shared/services/user-service.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css',
})
export class MainBodyComponent {
  currentPage: number = 1;
  constructor(private userService: UserServiceService) {}
  ngOnInit() {
    this.userService.getUsers(this.currentPage);
  }
  onPageChange(event: Event) {
    this.currentPage = this.currentPage;
    this.userService.getUsers(this.currentPage);
  }
}
