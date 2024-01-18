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

@NgModule({
  declarations: [
    PlansComponent,
    UserDashboardComponent,
    ProfilepageComponent,
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
    MatListModule 

  ]
})
export class UserModule { }
