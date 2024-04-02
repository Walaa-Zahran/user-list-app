import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('300ms ease-out', style({ opacity: 1 }))]),
    ]),
  ],
})
export class AppComponent {
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
