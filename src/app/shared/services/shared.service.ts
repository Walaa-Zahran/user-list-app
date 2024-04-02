// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private pageChangeSource = new BehaviorSubject<number>(1);
  currentPage = this.pageChangeSource.asObservable();

  constructor() {}

  changePage(page: number) {
    this.pageChangeSource.next(page);
  }
}
