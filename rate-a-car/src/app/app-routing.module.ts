import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LandingPageComponent } from './main/landing-page/landing-page.component';
import { CarLandingComponent } from './car-browser/layouts/car-landing/car-landing.component';
import { CarsTableComponent } from './car-browser/ui/cars-table/cars-table.component';
import { brandListResolver } from './car-browser/core/resolvers';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'cars',
        component: CarLandingComponent,
        resolve: { data: brandListResolver },
        children: [
          {
            path: '',
            component: CarsTableComponent,
          }
        ]
      }
    ],
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
