import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../../speedApps/src/app/admin/admin-routing/admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{
      path: 'dashboard', component: AdminDashboardComponent
    }]), 
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
