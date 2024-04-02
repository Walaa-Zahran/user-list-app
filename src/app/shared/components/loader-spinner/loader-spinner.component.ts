import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrl: './loader-spinner.component.css',
})
export class LoaderSpinnerComponent {
  loadingSubjection: Subscription | undefined;
  isLoading = false;
  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loadingSubjection = this.loaderService.isLoading.subscribe((res) => {
      this.isLoading = res;
    });
  }

  ngOnDestroy(): void {
    if (this.loadingSubjection && !this.loadingSubjection.closed) {
      this.loadingSubjection.unsubscribe();
    }
  }
}
