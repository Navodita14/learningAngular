import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: ServiceService, private route: ActivatedRoute) { }

  courses:any[] = [];

  ngOnInit(): void {
    // this.courses = this.coursesService.courses;

    // this.coursesService.getAllCourse().then((data:any)=>{
    //   this.courses=data;
    // })

   this.courses= this.route.snapshot.data['courses']
  }


}
