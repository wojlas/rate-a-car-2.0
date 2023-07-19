import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarBrowserRoutingModule } from './car-browser-routing.module';
import { UiModule as CarBrowserUiModule } from './ui/ui.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    CommonModule,
    CarBrowserRoutingModule,
    CarBrowserUiModule,
    CoreModule
  ]
})
export class CarBrowserModule { }
