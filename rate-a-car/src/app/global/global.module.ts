import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationBarComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: LandingPageComponent
      }
    ])
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class GlobalModule { }
