import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderSpinnerComponent } from '../components/loader-spinner/loader-spinner.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
const components = [LoaderSpinnerComponent];
const modules = [CommonModule, MaterialModule, RouterModule, FormsModule];
@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
