import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [],
  exports: [CommonModule, MatPaginatorModule, MatProgressSpinnerModule],
})
export class MaterialModule {}
