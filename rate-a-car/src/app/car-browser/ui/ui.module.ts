import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandTileComponent } from './brand-tile/brand-tile.component';



@NgModule({
  declarations: [
    BrandTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrandTileComponent
  ]
})
export class UiModule { }
