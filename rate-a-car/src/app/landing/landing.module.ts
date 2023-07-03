import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CoreModule } from '../core/core.module';
import { LandingRoutingModule } from './landing-routing.module';



@NgModule({
  declarations: [LandingPageComponent, NavigationBarComponent],
  imports: [
    CommonModule,
    CoreModule,
    LandingRoutingModule
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class LandingModule { }
