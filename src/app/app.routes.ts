import { Routes } from '@angular/router';
import { authRoutes } from "./auth/auth.routes";
import { AuthLayoutComponent } from "./auth/auth-layout/auth-layout.component";

export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
    component: AuthLayoutComponent
  },
];
