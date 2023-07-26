import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarBrowserRoutingModule } from './car-browser-routing.module';
import { UiModule as CarBrowserUiModule } from './ui/ui.module';
import { CoreModule } from '../core/core.module';
import { CarModelDetailsComponent } from './pages/car-model-details/car-model-details.component';
import { CarBrowserComponent } from './pages/car-browser/car-browser.component';
import { UiModule as GlobalUiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    CarListComponent,
    CarModelDetailsComponent,
    CarBrowserComponent
  ],
  imports: [
    CommonModule,
    CarBrowserRoutingModule,
    CarBrowserUiModule,
    CoreModule,
    GlobalUiModule
  ]
})
export class CarBrowserModule { }
