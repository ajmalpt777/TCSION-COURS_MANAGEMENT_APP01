import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileModel } from '../profile-user/profile.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  profileItem = new ProfileModel('','','','','','','','','','');

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {

    let userId=localStorage.getItem("editProfileId");
    this.userService.getUserProfileOne(userId)
    .subscribe((data)=>
    {
      this.profileItem = JSON.parse(JSON.stringify(data));
      console.log(this.profileItem);
    })

  }

  editProfile()
  {
    this.userService.editUserProfile(this.profileItem);
    alert("success");
    this.router.navigate(['/profile-user']);
  }

}
