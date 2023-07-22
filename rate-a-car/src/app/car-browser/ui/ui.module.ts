import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandTileComponent } from './brand-tile/brand-tile.component';
import { CarModelsTableComponent } from './car-models-table/car-models-table.component';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarBrowserRoutingModule } from '../car-browser-routing.module';



@NgModule({
  declarations: [
    BrandTileComponent,
    CarModelsTableComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    CarBrowserRoutingModule
  ],
  exports: [
    BrandTileComponent,
    CarModelsTableComponent
  ]
})
export class UiModule { }
