import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ViewSubscriptionsComponent } from './subscriptions/view-subscriptions/view-subscriptions.component';
import { ProfileComponent} from './authentication/profile/profile.component';
import { NewLoginComponent } from './authentication/new-login/new-login.component';
import { HomeComponent } from './authentication/home/home.component';
import { AuthGuard } from './authentication/roles/auth.guard';
import { PasswordComponent } from './authentication/password/password.component';
import { IdentifyComponent } from './authentication/password/identify/identify.component';
import { SmsCodeComponent } from './authentication/password/sms-code/sms-code.component';
import { SetPasswordComponent } from './authentication/password/set-password/set-password.component';
import { NewHomeComponent } from './authentication/new-home/new-home.component';
const routes: Routes = [
  { path: '', redirectTo: '/authentication/new-home', pathMatch: 'full' },
  {
    path: 'authentication',
    children: [
      {path:'password',component:PasswordComponent},
      {path:'new-home',component:NewHomeComponent},
      {path:'home', component:HomeComponent},
      { path: 'login', component: NewLoginComponent },
      { path: 'password/set-password', component: SetPasswordComponent },
      { path: 'password/sms-code', component: SmsCodeComponent },
      { path: 'password/identify', component: IdentifyComponent },
      

      
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent }
    ],
  },
  
  {
    path: 'subscriptions',
    children: [
      { path: 'view-subscriptions', component: ViewSubscriptionsComponent }
    ],
  },
  {
     path: 'login', component: LoginComponent 
  },
  {
    path: 'register', component: RegisterComponent 
 },
 {
  path: 'admin',
  loadChildren: () => import('../app/admin/admin-routing/admin.module').then((m) => m.AdminModule),
  canActivate: [AuthGuard],
  data: { allowedRoles: ['ADMIN'] }
},
{
  path: 'user',
  loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  canActivate: [AuthGuard],
  data: { allowedRoles: ['USER'] }
},
{ path: '', component: RegisterComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
