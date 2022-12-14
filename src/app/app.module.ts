import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
// import { ROUTES } from './app.route';
import { AuthGuard } from './auth.guard';
import { LoginAuthService } from './login-auth.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmindashboardComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,               
    AppRoutingModule
  ],
  providers: [
    UserService,
    AuthGuard,
    LoginAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
