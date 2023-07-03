import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { UserSignInComponent } from "./pages/modal/user-sign-in/user-sign-in.component";
import { UserSignUpComponent } from "./pages/modal/user-sign-up/user-sign-up.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'sign-in',
    component: UserSignInComponent
  },
  {
    path: 'sign-up',
    component: UserSignUpComponent
  },
  {
    path: '**',
    redirectTo: 'profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSpaceRoutingModule {}