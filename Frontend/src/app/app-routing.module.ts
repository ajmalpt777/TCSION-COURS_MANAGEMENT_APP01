import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseTakenComponent } from './course-taken/course-taken.component';
import { EditProfComponent } from './edit-prof/edit-prof.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginProfComponent } from './login-prof/login-prof.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ProfileProfComponent } from './profile-prof/profile-prof.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { SignupProfComponent } from './signup-prof/signup-prof.component';
import { SignupUserComponent } from './signup-user/signup-user.component';

const routes: Routes = [
                       {path:'',component:HomeComponent},
                       {path:'login-user',component:LoginUserComponent},
                       {path:'signup-user',component:SignupUserComponent},
                       {path:'login-prof',component:LoginProfComponent},
                       {path:'signup-prof',component:SignupProfComponent},
                       {path:'profile-prof',component:ProfileProfComponent},
                       {path:'profile-user',component:ProfileUserComponent},
                       {path:'edit-user',component:EditUserComponent},
                       {path:'edit-prof',component:EditProfComponent},
                       {path:'add-course',component:AddCourseComponent},
                       {path:'course-taken',component:CourseTakenComponent},
                       {path:'details-course',component:CourseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
