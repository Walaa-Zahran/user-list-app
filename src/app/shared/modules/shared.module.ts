import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderSpinnerComponent } from '../components/loader-spinner/loader-spinner.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
const components = [LoaderSpinnerComponent];
const modules = [CommonModule, MaterialModule, RouterModule];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule],
  exports: [...components, ...modules],
})
export class SharedModule {}
