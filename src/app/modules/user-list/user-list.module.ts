import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [UserListComponent, SearchComponent],
  imports: [CommonModule, RouterModule, CoreModule],
  exports: [UserListComponent, SearchComponent],
})
export class UserListModule {}
