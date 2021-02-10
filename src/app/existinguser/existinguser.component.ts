import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Existinguser } from '../existinguser';
import { CommonModule } from '@angular/common';
import { ExistinguserserviceService } from '../existinguserservice.service';

@Component({
  selector: 'app-existinguser',
  templateUrl: './existinguser.component.html',
  styleUrls: ['./existinguser.component.css']
})
export class ExistinguserComponent implements OnInit {

  constructor(private router:Router,private existinguserservice:ExistinguserserviceService) { }
  existing : Existinguser=new Existinguser();
  submitted = false;
  ngOnInit(){}

  Existinguserform=new FormGroup({
    depositorname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    
    depositornumber:new FormControl('',[Validators.required]),
    openingblc:new FormControl('',[Validators.required]),
    transcode:new FormControl('',[Validators.required]),
    amount:new FormControl('',[Validators.required]),
    closingbalance:new FormControl('',[Validators.required])
});
saveExistinguser(saveExistinguser)
  {
    if(this.Existinguserform.invalid){
      alert("invalid");
    }else{
    this.existing=new Existinguser();
    this.existing.depositorname=this.Existinguserform.get('depositorname').value;
    this.existing.depositornumber=this.Existinguserform.get('depositornumber').value;
    this.existing.openingblc=500;
    this.existing.transcode=this.Existinguserform.get('transcode').value;
    this.existing.amount=this.Existinguserform.get('amount').value;
  
    this.existing.closingbalance=this.Existinguserform.get('closingbalance').value;
    this.submitted=true;
    this.save();
    }
  }
  save()
{
  alert(this.Existinguserform.get('depositorname').value);
this.existinguserservice.saveExistinguser(this.existing).subscribe(data=>console.log(data),error=>console.log(error));
this .existing=new Existinguser();
}
ExistinguserForm(){
  this.submitted=false;
  this.Existinguserform.reset();
  
  }

}
