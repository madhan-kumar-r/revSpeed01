import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  {
    path: 'dashboard',
    component: UserDashboardComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), // Corrected line
    CommonModule,
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
