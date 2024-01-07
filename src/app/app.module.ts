import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { ViewSubscriptionsComponent } from './subscriptions/view-subscriptions/view-subscriptions.component';
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
import { HeaderComponent } from './authentication/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ViewSubscriptionsComponent,
    NewLoginComponent,
    HomeComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule ,
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
    BrowserModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
