import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './adminn-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BroadbandPlansComponent } from './broadband-plans/broadband-plans.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { FormComponent } from './form/form.component';
import { BusinessPlansComponent } from './business-plans/business-plans.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { NavComponent } from './nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ParentComponent } from './parent/parent.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BroadbandPlansComponent,
    CustomerDataComponent,
    FormComponent,
    BusinessPlansComponent,
    BusinessFormComponent,
    DeleteDialogComponent,
    NavComponent,
    DashComponent,

    DashboardComponent,
    ParentComponent,
  ],
  imports: [
    CommonModule,

    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatSelectModule, // Add MatSelectModule here
    MatDialogModule, // Add MatDialogModule here
    MatSidenavModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
})
export class AdminnModule {}
