import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {

  user={
    email1:'',
    name1:'',
  password1:'',
  password2:''
  }

  constructor(private userServices:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  signupUser()
  {
    this.userServices.signupUser(this.user)
    .subscribe(
      res=>{
        if(res.msg1){
          alert("success");
          this.router.navigate(['/login-user'])
        }
        if(res.msg2)
        {
          alert("Wrong:Try Again!!");
        }
  
      }
    )
  }

}
