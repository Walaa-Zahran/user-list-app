import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserCardComponent],
  imports: [CommonModule, RouterModule, CoreModule],
  exports: [UserListComponent, UserDetailComponent, UserCardComponent],
})
export class UserListModule {}
