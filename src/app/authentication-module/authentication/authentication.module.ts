import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from '../authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Component
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ForgotPasswordFormComponent } from '../forgot-password-form/forgot-password-form.component';



@NgModule({
  declarations: [
    RegistrationFormComponent,
    LoginFormComponent,
    ForgotPasswordFormComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
