import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private searchIdSource = new BehaviorSubject<number | null>(null);
  currentPage = this.searchIdSource.asObservable();

  constructor() {}

  changePage(page: number) {
    this.searchIdSource.next(page);
  }
  changeSearchId(id: number) {
    this.searchIdSource.next(id);
  }
}
