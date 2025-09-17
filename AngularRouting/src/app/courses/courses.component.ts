import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: ServiceService) { }

  courses:any[] = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }


}
