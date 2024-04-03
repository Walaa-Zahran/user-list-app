import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, RouterModule, CoreModule],
  exports: [UserListComponent, UserDetailComponent],
})
export class UserListModule {}
