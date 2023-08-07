import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    LoaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    LoaderComponent,
    PaginationComponent,
    FormsModule
  ],
})
export class UiModule { }
