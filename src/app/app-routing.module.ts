import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './modules/user-list/components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-list',
    pathMatch: 'full',
  },
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: 'user-detail',
    loadChildren: () =>
      import('./modules/user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
