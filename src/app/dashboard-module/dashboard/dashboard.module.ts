import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';

// Component
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';





@NgModule({
  declarations: [
    AdminDashboardComponent,
    CustomerDashboardComponent,
    ProductDetailComponent,
    CustomerDetailComponent,
    ProductEditComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    NgxChartsModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
