import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  public isLoading = new BehaviorSubject<boolean>(false);
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  show(): void {
    this.ngZone.run(() => {
      document.body.className += ' ' + 'loading';
      this.isLoading.next(true);
      setTimeout(() => {
        this.hide();
      }, 10000);
    });
  }

  hide(): void {
    this.ngZone.run(() => {
      document.body.classList.remove('loading');
      this.isLoading.next(false);
    });
  }
}
