import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepageComponent } from '../user-dashboard/profilepage/profilepage.component';
import { UpdateprofileComponent } from '../user-dashboard/updateprofile/updateprofile.component';
import { PlansComponent } from '../user-dashboard/plans/plans.component';
const routes: Routes = [
  
  {
    path: 'udashboard',
    component: UserDashboardComponent,
    children:[
  {path:'uprofile',component:ProfilepageComponent},
  {path:'uplan',component:PlansComponent },
  {path:'updateprofile',component:UpdateprofileComponent},
],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), // Corrected line
   
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
