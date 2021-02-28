import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CourseModel } from '../add-course/course.model';
import { EnrollModel } from './enroll.model';
import { ProfileModel } from '../profile-user/profile.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseItem:CourseModel[];
  enrollItem = new EnrollModel('','','','','','','');
  // profileItem = new ProfileModel('','','','','','','','','','');
  profileItem : ProfileModel[];
  enrollRequest=false;

  constructor(private userService:UserService,public auth:AuthService) { }

  ngOnInit(): void {
    let courseId=localStorage.getItem("detailsCourseId");
    this.userService.getCourseDetails(courseId)
    .subscribe((data)=>
    { 
      this.courseItem  =JSON.parse(JSON.stringify(data));
    })

    let userId=localStorage.getItem("userId");
    this.userService.getUserProfile(userId)
    .subscribe((data)=>
    {
      this.profileItem = JSON.parse(JSON.stringify(data));
    })
    
    
    
      this.enrollItem.c_name=this.courseItem[0].name;
      this.enrollItem.p_email=this.courseItem[0].email;
      this.enrollItem.s_name=this.profileItem[0].name;
      this.enrollItem.s_email=this.profileItem[0].email;
      console.log(this.enrollItem);
      this.userService.enrollStatus(this.enrollItem)
      .subscribe((data)=>
      {
        this.enrollItem = JSON.parse(JSON.stringify(data));
        console.log(this.enrollItem);
        console.log(this.enrollItem[0].status);
      }) 
   

  }

  enroll(course){
    this.enrollRequest=true;
    console.log("enroll");
    console.log(this.profileItem[0]);
    this.enrollItem.c_name=course.name;
    this.enrollItem.c_professor=course.professor;
    this.enrollItem.p_email=course.email;
    this.enrollItem.status="requested";
    this.enrollItem.s_name=this.profileItem[0].name;
    this.enrollItem.s_email=this.profileItem[0].email;
    this.enrollItem.s_education=this.profileItem[0].education;
    console.log(this.enrollItem);
    this.userService.enrollCourse(this.enrollItem)
    .subscribe((data)=>
    {
      this.enrollItem = JSON.parse(JSON.stringify(data));
      console.log(this.enrollItem);

    })
  }

  cancel(course){
    this.enrollRequest=false;
    console.log("cancel");
    console.log(this.enrollItem)
  }

}
