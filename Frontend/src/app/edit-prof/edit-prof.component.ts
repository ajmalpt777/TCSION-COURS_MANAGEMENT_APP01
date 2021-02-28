import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from '../prof.service';
import { ProfProfileModel } from '../profile-prof/profprofile.model';


@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.css']
})
export class EditProfComponent implements OnInit {

  profItem = new ProfProfileModel('','','','','','','','','','');

  constructor(private profService:ProfService,private router:Router) { }

  ngOnInit(): void {
    let profId=localStorage.getItem("editProfileId");
    this.profService.getProfProfileOne(profId)
    .subscribe((data)=>
    {
      this.profItem = JSON.parse(JSON.stringify(data));
      console.log(this.profItem);
    })
  }

  editProfile()
  {
    this.profService.editProfProfile(this.profItem);
    alert("success");
    this.router.navigate(['/profile-prof']);
  }

}
