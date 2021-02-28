import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private userServices:UserService,private router:Router) { }

  user={
    username:'',
    password:''
    }

  ngOnInit(): void {
  }

  loginUser(){

    this.userServices.loginUser(this.user)
  .subscribe(
    res=>{
    
      if(res.tokenUser){
        localStorage.setItem('tokenUser',res.tokenUser)
        localStorage.setItem('userId',this.user.username)
        alert("success");
        this.router.navigate(['/profile-user'])
        }
      if(res.msg)
      {
        alert("Wrong:Try Again!!");
      }
    }
  )

  }

}
