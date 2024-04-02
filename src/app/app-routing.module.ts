import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './modules/user-list/components/user-list/user-list.component';
import { MainBodyComponent } from './core/components/main-body/main-body.component';
import { UserDetailComponent } from './modules/user-detail/components/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainBodyComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      { path: 'user-detail/:id', component: UserDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
