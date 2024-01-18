
import { BroadbandPlansComponent } from './broadband-plans/broadband-plans.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


import { BusinessPlansComponent } from './business-plans/business-plans.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FormComponent } from './form/form.component';
import { AdminDashboardComponent } from '../../../../speedApps/src/app/admin/admin-routing/admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashComponent } from './dash/dash.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    BroadbandPlansComponent,
    BusinessFormComponent,
    BusinessPlansComponent,
    CustomerDataComponent,
    DeleteDialogComponent,
    FormComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,

    AdminRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule, // Move ReactiveFormsModule to the imports array
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule 
  ],
})
export class AdminModule {}
