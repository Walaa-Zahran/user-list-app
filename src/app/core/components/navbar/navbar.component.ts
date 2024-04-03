import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../shared/services/user-service.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private userService: UserServiceService,
    private sharedService: SharedService
  ) {}
  handleSearch(searchTerm: number) {
    console.log('Searching for:', searchTerm);
    this.userService?.getUser(searchTerm);
    console.log('Searching for:', searchTerm);
  }
  isUserDetailPage(): boolean {
    return this.router.url.includes('/user-detail');
  }
  onSearchResults(searchResults: any) {
    this.sharedService.changeSearchId(searchResults);
    if (Array.isArray(searchResults)) {
      searchResults.forEach((result: unknown) => {
        if (
          typeof result === 'object' &&
          result !== null &&
          'data' in result &&
          'id' in (result.data as { id: unknown })
        ) {
          // Type assertion for result.data
          const data = result.data as { id: number };
          this.userService?.getUser(data.id);
        } else {
          console.error('Unexpected result structure:', result);
        }
      });
    } else if (typeof searchResults === 'object' && searchResults !== null) {
      // Assuming searchResults is a single search result object
      if ('data' in searchResults && 'id' in searchResults.data) {
        const data = searchResults.data as { id: number };
        this.userService?.getUser(data.id);
      } else {
        console.error('Unexpected object structure:', searchResults);
      }
    } else {
      console.error(
        'searchResults is not an array or an object:',
        searchResults
      );
    }
  }
}
