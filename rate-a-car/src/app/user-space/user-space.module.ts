import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserSignInComponent } from './pages/modal/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './pages/modal/user-sign-up/user-sign-up.component';
import { UserSpaceRoutingModule } from './user-space-routing.module';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserSignInComponent,
    UserSignUpComponent
  ],
  imports: [
    CommonModule,
    UserSpaceRoutingModule
  ]
})
export class UserSpaceModule { }
