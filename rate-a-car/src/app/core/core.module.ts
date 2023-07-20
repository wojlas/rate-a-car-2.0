import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  EmptyDashPipe,
  FilterByPipe,
  MapPropertyPipe,
  SortByPipe
} from './pipes';



@NgModule({
  declarations: [
    SortByPipe,
    EmptyDashPipe,
    FilterByPipe,
    MapPropertyPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SortByPipe,
    EmptyDashPipe,
    FilterByPipe,
    MapPropertyPipe
  ]
})
export class CoreModule { }
