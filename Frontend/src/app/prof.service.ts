import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  signupProf(user)
  {
    return this.http.post<any>("http://localhost:3000/signup-prof",user)
  }
  loginProf(user)
  {
  return this.http.post<any>("http://localhost:3000/login-prof",user);
  }

  getProfProfile(id){
    return this.http.get("http://localhost:3000/prof-profile/"+id);
  }
  getProfProfileOne(id){
    console.log(id);
    return this.http.get("http://localhost:3000/prof-profileone/"+id);
  }

  editProfProfile(profile){
    
    return this.http.put("http://localhost:3000/edit-prof",profile)
    .subscribe(data=>{
      console.log(data)
    })

  }

  addCourse(course){
    return this.http.post("http://localhost:3000/course-add",course)
    .subscribe(data=> { console.log(data)} )
  }

  getCourses(id){
    return this.http.get("http://localhost:3000/courses-taken/"+id)
  }

  constructor(private http:HttpClient) { }
}
