import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  signupUser(user)
  {
    return this.http.post<any>("http://localhost:3000/signup-user",user)
  }
  
  loginUser(user)
  {
  return this.http.post<any>("http://localhost:3000/login-user",user);
  }

  getUserProfile(id){
    return this.http.get("http://localhost:3000/user-profile/"+id);
  }
  getUserProfileOne(id){
    console.log(id);
    return this.http.get("http://localhost:3000/user-profileone/"+id);
  }

  editUserProfile(profile){
    
    return this.http.put("http://localhost:3000/edit-user",profile)
    .subscribe(data=>{
      console.log(data)
    })

  }

  getAllCourses(){
    return this.http.get("http://localhost:3000/all-courses");
  }
  getCourseDetails(id){
    return this.http.get("http://localhost:3000/course-details/"+id);
  }

  enrollCourse(enroll)
  {
  return this.http.post("http://localhost:3000/enroll-course",enroll);
  }
  enrollStatus(enroll)
  {
  return this.http.post("http://localhost:3000/enroll-status",enroll);
  }

  constructor(private http:HttpClient) { }

}
