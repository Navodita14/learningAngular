import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private coursesService: ServiceService) { }

  courses:any[] = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }

}
