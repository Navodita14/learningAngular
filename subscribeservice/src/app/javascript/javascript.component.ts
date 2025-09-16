import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service'

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  title='javascript'
  constructor() { }

  ngOnInit(): void {
  }

OnEnroll(){
  const enrollService= new ServiceService;
  enrollService.OnEnrollClicked(this.title);
}

}
