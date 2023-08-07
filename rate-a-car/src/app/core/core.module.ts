import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  EmptyDashPipe,
  FilterByPipe,
  LastElementPipe,
  MapPropertyPipe,
  SortByPipe
} from './pipes';



@NgModule({
  declarations: [
    SortByPipe,
    EmptyDashPipe,
    FilterByPipe,
    MapPropertyPipe,
    LastElementPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SortByPipe,
    EmptyDashPipe,
    FilterByPipe,
    MapPropertyPipe,
    LastElementPipe
  ]
})
export class CoreModule { }
