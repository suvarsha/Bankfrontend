import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Existinguser } from '../existinguser';
import { ExistinguserserviceService } from '../existinguserservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router:Router,private existingservice:ExistinguserserviceService) { }
  update:Observable<any[]>;
  ngOnInit(){}

  
}
