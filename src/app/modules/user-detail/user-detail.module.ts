import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [CommonModule, RouterModule],
  exports: [UserDetailComponent],
})
export class UserDetailModule {}
