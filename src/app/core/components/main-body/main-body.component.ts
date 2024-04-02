import { Component } from '@angular/core';
import { UserServiceService } from '../../../shared/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css',
})
export class MainBodyComponent {
  currentPage: number = 1;
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.userService.getUsers(this.currentPage);
  }
  onPageChange(event: Event) {
    this.currentPage = this.currentPage;
    this.userService.getUsers(this.currentPage);
  }
  isUserDetailPage(): boolean {
    return this.router.url.includes('/user-detail');
  }
}
