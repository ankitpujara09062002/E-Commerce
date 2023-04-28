import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationModule } from './authentication-module/authentication/authentication.module';
import { DashboardModule } from './dashboard-module/dashboard/dashboard.module';
import { CartModule } from './cart-module/cart/cart.module';
import { ReactiveFormsModule } from '@angular/forms';

// Component
import { PageNotFoundComponent } from './other-component/page-not-found/page-not-found.component';
import { HeaderComponent } from './other-component/page-not-found/header/header.component';
import { FooterComponent } from './other-component/page-not-found/footer/footer.component';
import { ProfileComponent } from './other-component/profile/profile.component';
import { LoaderComponent } from './other-component/loader/loader.component';
import { PaymentFormComponent } from './other-component/payment-form/payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    LoaderComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AuthenticationModule,
    DashboardModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
