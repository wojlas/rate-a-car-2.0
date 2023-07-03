import { RouterModule, Routes } from "@angular/router";
import { CarListComponent } from "./pages/car-list/car-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: CarListComponent
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