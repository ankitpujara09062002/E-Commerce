import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { PageNotFoundComponent } from './other-component/page-not-found/page-not-found.component';
import { ProfileComponent } from './other-component/profile/profile.component';
import { PaymentFormComponent } from './other-component/payment-form/payment-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () => import('../app/authentication-module/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/dashboard-module/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../app/cart-module/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'payment',
    component: PaymentFormComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
