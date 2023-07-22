import { RouterModule, Routes } from "@angular/router";
import { CarListComponent } from "./pages/car-list/car-list.component";
import { NgModule } from "@angular/core";
import { CarModelDetailsComponent } from "./pages/car-model-details/car-model-details.component";
import { CarBrowserComponent } from "./pages/car-browser/car-browser.component";

const routes: Routes = [
  {
    path: '',
    component: CarBrowserComponent,
    children: [
      {
        path: '',
        component: CarListComponent
      },
      {
        path: ':id',
        component: CarModelDetailsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'car-browser'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarBrowserRoutingModule {}