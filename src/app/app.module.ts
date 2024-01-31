import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { UserPlanComponent } from './user-plan/user-plan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NewLoginComponent } from './authentication/new-login/new-login.component';
import { HomeComponent } from './authentication/home/home.component';
import { MatIcon } from '@angular/material/icon';
import { HeaderComponent } from './authentication/header/header.component';
import { PasswordComponent } from './authentication/password/password.component';
import { IdentifyComponent } from './authentication/password/identify/identify.component';
import { SmsCodeComponent } from './authentication/password/sms-code/sms-code.component';
import { SetPasswordComponent } from './authentication/password/set-password/set-password.component';
import { NewHomeComponent } from './authentication/new-home/new-home.component';
import { TagsComponent } from './authentication/tags/tags.component';
import { SearchComponent } from './authentication/search/search.component';
import { FootComponent } from './authentication/foot/foot.component';
import { MatTableModule } from '@angular/material/table';
import { ReviewComponent } from './authentication/review/review.component';
import { SliderComponent } from './authentication/slider/slider.component';
import { BasicPlanComponent } from './basic-plan/basic-plan.component';
import { RechargeDialogComponent } from './recharge-dialog/recharge-dialog.component';
import { UpdateprofileComponent } from './user/user-dashboard/updateprofile/updateprofile.component';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { HomePlansComponent } from './authentication/home-plans/home-plans.component';
import { BusinessPlansComponent } from './adminn/business-plans/business-plans.component';
import { AboutUsComponent } from './authentication/about-us/about-us.component';
import { ContactUsComponent } from './authentication/contact-us/contact-us.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePlansComponent,
    RegisterComponent,
    BusinessPlansComponent,
    AboutUsComponent,
    ContactUsComponent ,
    ProfileComponent,
    BasicPlanComponent,
    NewLoginComponent,
    HomeComponent,
    HeaderComponent,
    PasswordComponent,
    IdentifyComponent,
    SmsCodeComponent,
    SetPasswordComponent,
    NewHomeComponent,
    TagsComponent,
    SearchComponent,
    FootComponent,
    ReviewComponent,
    SliderComponent,
    UserPlanComponent,
    UserPlanComponent,
     RechargeDialogComponent,
   

  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    UserModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule,

    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    MatSidenavModule,  

    MatListModule,

    MatMenuModule,
    NgxChartsModule,

    
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
