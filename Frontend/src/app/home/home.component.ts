import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CourseModel } from '../add-course/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses:CourseModel[];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    
    this.userService.getAllCourses().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
      console.log(this.courses);
    })
  }

  detailsCourse(course)
  {
    localStorage.setItem("detailsCourseId",course._id.toString());
      this.router.navigate(['details-course']); 
  }

}
