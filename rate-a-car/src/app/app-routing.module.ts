import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'car-browser',
    loadChildren: () => import('./car-browser/car-browser.module').then(m => m.CarBrowserModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user-space/user-space.module').then(m => m.UserSpaceModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
