import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupProfComponent } from './signup-prof/signup-prof.component';
import { LoginProfComponent } from './login-prof/login-prof.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileProfComponent } from './profile-prof/profile-prof.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditProfComponent } from './edit-prof/edit-prof.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseTakenComponent } from './course-taken/course-taken.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginUserComponent,
    SignupUserComponent,
    SignupProfComponent,
    LoginProfComponent,
    ProfileUserComponent,
    ProfileProfComponent,
    EditUserComponent,
    EditProfComponent,
    AddCourseComponent,
    CourseTakenComponent,
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
