import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
