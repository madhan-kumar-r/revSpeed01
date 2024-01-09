import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
 
  // {
  //   path: '',
  //   component: AdminDashboardComponent
  // },
  { path: 'dashboard', component: AdminDashboardComponent },

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), // Corrected line
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
