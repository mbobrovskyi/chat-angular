import { Routes } from '@angular/router';
import { SignInComponent } from "../view/sign-in/sign-in.component";
import { SignUpComponent } from "../view/sign-up/sign-up.component";

export const authRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];
