import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarBrowserRoutingModule } from './car-browser-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    CommonModule,
    CarBrowserRoutingModule,
  ]
})
export class CarBrowserModule { }
