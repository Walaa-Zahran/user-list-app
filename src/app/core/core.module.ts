import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/modules/shared.module';
import { PaginationComponent } from './components/pagination/pagination.component';
const components = [
  MainBodyComponent,
  FooterComponent,
  NavbarComponent,
  PaginationComponent,
];
const modules = [SharedModule];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, AppRoutingModule],
  exports: [...components, ...modules],
})
export class CoreModule {}
