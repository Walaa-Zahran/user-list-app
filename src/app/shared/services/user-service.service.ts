import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/api-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  user!: any[];
  private apiUrl = 'https://reqres.in/api';
  searchTerm!: number;

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any[]> {
    return this.http.get<ApiResponse[]>(`${this.apiUrl}/users?page=${page}`);
  }
  getUser(id: number): Observable<any[]> {
    return this.http.get<ApiResponse[]>(`${this.apiUrl}/users/${id}`);
  }
}
