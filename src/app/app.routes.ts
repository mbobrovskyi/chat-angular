import { Routes } from '@angular/router';
import { authRoutes } from "./auth/infrastructure/auth.routes";
import { AuthLayoutComponent } from "./auth/view/auth-layout/auth-layout.component";

export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
    component: AuthLayoutComponent
  },
];
