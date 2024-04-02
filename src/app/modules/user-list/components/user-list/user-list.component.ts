import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
export class UserListComponent {
  isLoading = false;
  constructor(private http: HttpClient) {}
  loadData() {
    this.isLoading = true;
    this.http.get('your-api-url').subscribe((data) => {
      // process data
      this.isLoading = false;
    });
  }
}
