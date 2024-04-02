// pagination.component.ts
import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  constructor(private sharedService: SharedService) {}

  onPageChange(pageNumber: number) {
    this.sharedService.changePage(pageNumber);
  }
}
