import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from '../prof.service';

@Component({
  selector: 'app-login-prof',
  templateUrl: './login-prof.component.html',
  styleUrls: ['./login-prof.component.css']
})
export class LoginProfComponent implements OnInit {

  constructor(private profService:ProfService,private router:Router) { }

  user={
    username:'',
    password:''
    }

  ngOnInit(): void {
  }

  loginProf(){

    this.profService.loginProf(this.user)
  .subscribe(
    res=>{
    
      if(res.tokenProf){
        localStorage.setItem('tokenProf',res.tokenProf)
        localStorage.setItem('profId',this.user.username)
        alert("success");
        this.router.navigate(['/profile-prof'])
        }
      if(res.msg)
      {
        alert("Wrong:Try Again!!");
      }

    }
  )

  }

}
