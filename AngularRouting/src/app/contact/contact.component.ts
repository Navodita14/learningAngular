import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeactivateComponent } from '../Services/candeactivate-gaurd.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, IDeactivateComponent{

  firstname:string;
  lastname:string;
  country:string;
  subject:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  canExit(){
    if(this.firstname||this.lastname||this.country||this.subject){
      return confirm("Do you want to save")
    }else{
      return true
    }
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }
}
