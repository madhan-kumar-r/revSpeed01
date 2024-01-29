import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './authentication/profile/profile.component';
import { NewLoginComponent } from './authentication/new-login/new-login.component';
import { HomeComponent } from './authentication/home/home.component';
import { AuthGuard } from './authentication/roles/auth.guard';
import { PasswordComponent } from './authentication/password/password.component';
import { IdentifyComponent } from './authentication/password/identify/identify.component';
import { SmsCodeComponent } from './authentication/password/sms-code/sms-code.component';
import { SetPasswordComponent } from './authentication/password/set-password/set-password.component';
import { NewHomeComponent } from './authentication/new-home/new-home.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ProfilepageComponent } from './user/user-dashboard/profilepage/profilepage.component';
import { PlansComponent } from './user/user-dashboard/plans/plans.component';
import { UpdateprofileComponent } from './user/user-dashboard/updateprofile/updateprofile.component';
import { BusinessPlansComponent } from './authentication/business-plans/business-plans.component';
import { HomePlansComponent } from './authentication/home-plans/home-plans.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentication/new-home', pathMatch: 'full' },
  { path: 'resetpass', component: IdentifyComponent },

  {
    path: 'authentication',
    children: [
      { path: 'password', component: PasswordComponent },
      { path: 'new-home', component: NewHomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: NewLoginComponent },
      { path: 'password/set-password', component: SetPasswordComponent },
      { path: 'password/sms-code', component: SmsCodeComponent },
      { path: 'password/identify', component: IdentifyComponent },

      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },

  {
    path: 'business-plans',
    component: BusinessPlansComponent,
  },
  {
    path: 'home-plans',
    component: HomePlansComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent 
 },
 
// { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
{ path: 'adminn', loadChildren: () => import('./adminn/adminn.module').then((m) => m.AdminnModule) },
// { path: 'admin-new', component: AdminModule }
// {
//   path: 'admin',
//   loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
// },
// {
//   path: 'user',
//   loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
// // },
// { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
{
  path: 'udashboard',
  component: UserDashboardComponent,
  children:[
{path:'uprofile',component:ProfilepageComponent},
{path:'uplan',component:PlansComponent },
{path:'updateprofile',component:UpdateprofileComponent},
],
},
  // { path: 'dashboard', component: UserDashboardComponent },
  // { path: 'profile', component: ProfilepageComponent },
  // { path: 'plan', component: PlansComponent },
  // { path: 'updateprofile', component: UpdateprofileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
