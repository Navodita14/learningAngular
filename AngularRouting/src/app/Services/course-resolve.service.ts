import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolveService implements Resolve<any>{

  constructor(private courseService: ServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.courseService.getAllCourse().then((data:any)=>{
      return data;
    })
  }


}
