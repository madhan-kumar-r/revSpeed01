import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BroadbandPlansComponent } from './admin-dashboard/broadband-plans/broadband-plans.component';
import { BusinessFormComponent } from './admin-dashboard/business-form/business-form.component';
import { BusinessPlansComponent } from './admin-dashboard/business-plans/business-plans.component';
import { CoreComponent } from './admin-dashboard/core/core.component';
import { CustomerDataComponent } from './admin-dashboard/customer-data/customer-data.component';
import { DeleteDialogComponent } from './admin-dashboard/delete-dialog/delete-dialog.component';
import { FormComponent } from './admin-dashboard/form/form.component';
import { ServicesComponent } from './admin-dashboard/services/services.component';
import { SidenavComponent } from './admin-dashboard/sidenav/sidenav.component';
import { AdminhomeComponent } from './admin-dashboard/adminhome/adminhome.component';



@NgModule({
  declarations: [
  
    AdminDashboardComponent,
       BroadbandPlansComponent,
       BusinessFormComponent,
       BusinessPlansComponent,
       CoreComponent,
       CustomerDataComponent,
       DeleteDialogComponent,
       FormComponent,
       ServicesComponent,
       SidenavComponent,
       AdminhomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
