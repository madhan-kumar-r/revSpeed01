import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepageComponent } from '../profilepage/profilepage.component';
import { UpdateprofileComponent } from '../updateprofile/updateprofile.component';
import { PlansComponent } from '../plans/plans.component';
const routes: Routes = [
  
  {path: 'dashboard',component: UserDashboardComponent},
  {path:'profile',component:ProfilepageComponent},
  {path:'plan',component:PlansComponent },
  {path:'updateprofile',component:UpdateprofileComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), // Corrected line
   
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
