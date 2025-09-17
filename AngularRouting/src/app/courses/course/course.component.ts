import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit , OnDestroy{

 constructor(private service: ServiceService, private route: ActivatedRoute, private router:Router) { }

  course:any;
  courseId: number| string|null;
  RouteParamObj:Subscription;
  editMode= false;

  ngOnInit(): void {
    // this.courseId = this.route.snapshot.params['id'];
    // // this.courseId = this.route.snapshot.paramMap.get('id');
    // //this.courseId = this.route.snapshot.params['name'];
    // this.course = this.service.courses.find(x => x.id == this.courseId);

    this.RouteParamObj= this.route.paramMap.subscribe((params)=>{
      this.courseId= params.get('id');
      this.course=this.service.courses.find(x=>x.id==this.courseId)
    })


    // this.editMode=Boolean(this.route.snapshot.queryParamMap.get('edit'))

    this.route.queryParamMap.subscribe((param)=>{
      this.editMode=Boolean(param.get('edit'))
    })
  }

  Edit(){
    this.editMode=true
  }

  Save(){
    this.editMode=false
  }

  appendQuery(){
    this.router.navigate(['/Courses/Course', this.courseId], {queryParams: {edit: true}})
    // this.editMode=true
  }
  ngOnDestroy(): void {
    this.RouteParamObj.unsubscribe();
  }

}
