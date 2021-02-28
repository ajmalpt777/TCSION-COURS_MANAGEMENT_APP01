import { Component, OnInit } from '@angular/core';
import { ProfService } from '../prof.service';
import { CourseModel } from '../add-course/course.model'

@Component({
  selector: 'app-course-taken',
  templateUrl: './course-taken.component.html',
  styleUrls: ['./course-taken.component.css']
})
export class CourseTakenComponent implements OnInit {

  courses: CourseModel[];

  constructor(private profService:ProfService) { }

  ngOnInit(): void {
   let profIdC=localStorage.getItem("profId");
    this.profService.getCourses(profIdC).subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
      console.log(this.courses);
    })
  }

}
