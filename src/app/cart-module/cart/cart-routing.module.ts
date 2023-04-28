import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth-guard/auth.guard';

// Component
import { CartComponent } from './cart.component';



const routes: Routes = [
    {
        path: '',
        component: CartComponent,
        data: { role: 'customer' },
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule { }
