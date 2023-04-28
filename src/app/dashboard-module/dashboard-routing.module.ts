import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard/auth.guard';

// Component
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'customer',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminDashboardComponent,
        data: { role: 'admin' },
        canActivate: [AuthGuard]
    },
    {
        path: 'customer',
        component: CustomerDashboardComponent,
    },
    {
        path: 'product-detail',
        component: ProductDetailComponent,
        data: { role: 'customer' },
        canActivate: [AuthGuard]
    },
    {
        path: 'customer-detail',
        component: CustomerDetailComponent,
        data: { role: 'admin' },
        canActivate: [AuthGuard]
    },
    {
        path: 'product-edit',
        component: ProductEditComponent,
        data: { role: 'admin' },
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
