import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './modules/user-list/components/user-list/user-list.component';
import { MainBodyComponent } from './core/components/main-body/main-body.component';

const routes: Routes = [
  {
    path: '',
    component: MainBodyComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'user-detail',
        loadChildren: () =>
          import('./modules/user-detail/user-detail.module').then(
            (m) => m.UserDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
