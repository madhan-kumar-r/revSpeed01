import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PlansComponent } from './plans/plans.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PlansComponent,
    UserDashboardComponent,
    ProfilepageComponent,
    UpdateprofileComponent,
    NavComponent 
  ],
  imports: [
    
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule ,
    MatFormFieldModule,
     MatInputModule,
      MatSelectModule,
      MatDialogModule,
  
    
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule ,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
  
    

  ]
})
export class UserModule { }
