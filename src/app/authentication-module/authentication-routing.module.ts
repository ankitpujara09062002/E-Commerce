import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full'
    },
    {
        path: 'registration',
        component: RegistrationFormComponent
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'forgot-Password',
        component: ForgotPasswordFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
