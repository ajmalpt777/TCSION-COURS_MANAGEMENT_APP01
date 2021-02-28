import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ProfileModel } from './profile.model';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  profileItem:ProfileModel[]=[] ;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    let userId=localStorage.getItem("userId");
    this.userService.getUserProfile(userId)
    .subscribe((data)=>
    {
      this.profileItem = JSON.parse(JSON.stringify(data));
    })

  }

  editProfile(profile)
  {
    localStorage.setItem("editProfileId",profile._id.toString());
    this.router.navigate(['edit-user']);
  }

}
