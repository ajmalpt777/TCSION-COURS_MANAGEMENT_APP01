import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from '../prof.service';
import { ProfProfileModel } from './profprofile.model';

@Component({
  selector: 'app-profile-prof',
  templateUrl: './profile-prof.component.html',
  styleUrls: ['./profile-prof.component.css']
})
export class ProfileProfComponent implements OnInit {

  profItem:ProfProfileModel[]=[] ;

  constructor(private profService:ProfService,private router:Router) { }

  ngOnInit(): void {
    let profId=localStorage.getItem("profId");
    this.profService.getProfProfile(profId)
    .subscribe((data)=>
    {
      this.profItem = JSON.parse(JSON.stringify(data));
    })
  }

  editProfile(profile)
  {
    localStorage.setItem("editProfileId",profile._id.toString());
    this.router.navigate(['edit-prof']);
  }

}
