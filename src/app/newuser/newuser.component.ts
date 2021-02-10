import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Existinguser } from '../existinguser';
import { NewuserserviceService } from '../newuserservice.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor(private router: Router,private newuserservice:NewuserserviceService) { }
  user:Existinguser=new Existinguser();
  submitted = false;  
  ngOnInit(): void {
  }
  newuserSaveForm=new FormGroup({
    depositornumber:new FormControl('',[Validators.required]),
  });
  saveUser(saveUser)
  {
    this.user=new Existinguser();
    this.user.depositornumber=this.newuserSaveForm.get('depositornumber').value;
    this.newuserservice.findnumber(this.user.depositornumber).subscribe(data=>{
      this.user=data;
});
}
save()
{
this.newuserservice.saveuser(this.user).subscribe(data=>console.log(data),error=>console.log(error));
this .user=new Existinguser();
}

}

