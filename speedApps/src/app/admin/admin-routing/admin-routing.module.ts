import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent
  },
];

@NgModule({
  declarations: [], // Include your components in the 'declarations' array
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Use the 'routes' array directly here
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
