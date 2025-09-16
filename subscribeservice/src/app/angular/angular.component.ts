import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers:[ServiceService]
})
export class AngularComponent implements OnInit {
  title="angular"
  constructor(private enrollService : ServiceService) { 

  }

  ngOnInit(): void {
  }

  OnEnroll(){

    this.enrollService.OnEnrollClicked(this.title);
  }

}
