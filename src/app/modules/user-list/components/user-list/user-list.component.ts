import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../shared/services/shared.service';
import { UserServiceService } from '../../../../shared/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers!: [];
  searchTerm!: number;
  searchResultUser: any;
  searchedUserId!: number;

  constructor(
    private userService: UserServiceService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.currentPage.subscribe((page) => {
      this.loadUsers(page !== null ? page : 1);
    });
  }
  filterUsers(): any[] {
    if (!this.searchTerm) {
      return this.users;
    }
    // Convert searchTerm to a number for comparison
    const searchId = Number(this.searchTerm);
    return this.users.filter((user) => user.id === searchId);
  }
  loadUsers(page: number) {
    this.userService.getUsers(page).subscribe((users: any) => {
      this.users = users.data;
    });
  }

  onSearchResults(searchResults: any[]) {
    this.users = searchResults;
  }
}
