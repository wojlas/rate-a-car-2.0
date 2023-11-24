import { Routes } from "@angular/router";
import { CarsTableComponent } from "./ui/cars-table/cars-table.component";
import { brandListResolver, carDetailsResolver, carsListResolver } from "./core/resolvers";
import { CarLandingComponent } from "./layouts/car-landing/car-landing.component";
import { CarDetailsComponent } from "./views/car-details/car-details.component";

export const routes: Routes = [
  {
    path: '',
    component: CarLandingComponent,
    resolve: { data: brandListResolver },
    children: [
      {
        path: '',
        component: CarsTableComponent,
        resolve: { data: carsListResolver },
      },
      {
        path: ':id',
        component: CarDetailsComponent,
        resolve: { details: carDetailsResolver }
      }
    ]
  }
];