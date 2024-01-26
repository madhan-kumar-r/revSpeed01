import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BroadbandPlansComponent } from './broadband-plans/broadband-plans.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { BusinessPlansComponent } from './business-plans/business-plans.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'broadband-plans', component: BroadbandPlansComponent },
      { path: 'customer-data', component: CustomerDataComponent },
      { path: 'business-plans', component: BusinessPlansComponent },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
