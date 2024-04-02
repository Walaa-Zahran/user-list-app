import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [UserListComponent, SearchComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class UserListModule {}
