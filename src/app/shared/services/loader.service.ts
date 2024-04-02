import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoaderService {
  public isLoading = new BehaviorSubject<boolean>(false);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  show(): void {
    document.body.className += ' ' + 'loading';
    this.isLoading.next(true);
  }
  hide(): void {
    document.body.classList.remove('loading');
    this.isLoading.next(false);
  }
}
