import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from '../prof.service';

@Component({
  selector: 'app-signup-prof',
  templateUrl: './signup-prof.component.html',
  styleUrls: ['./signup-prof.component.css']
})
export class SignupProfComponent implements OnInit {

  user={
    email1:'',
    name1:'',
  password1:'',
  password2:''
  }

  constructor(private profService:ProfService,private router:Router) { }

  ngOnInit(): void {
  }

  signupProf()
  {
    this.profService.signupProf(this.user)
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
