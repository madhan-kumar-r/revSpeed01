import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { BroadbandPlansComponent } from './broadband-plans/broadband-plans.component';
import { BusinessPlansComponent } from './business-plans/business-plans.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'broadband-plans', component: BroadbandPlansComponent },
  { path: 'customer-data', component: CustomerDataComponent },
  { path: 'business-plans', component: BusinessPlansComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), // Corrected line
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
