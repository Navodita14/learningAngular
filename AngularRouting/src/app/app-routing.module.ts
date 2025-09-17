import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CourseComponent } from "./courses/course/course.component";
import { CoursesComponent } from "./courses/courses.component";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { CourseGaurdService } from "./Services/course-gaurd.service";
import { CandeactivateGaurdService } from "./Services/candeactivate-gaurd.service";

const appRoute: Routes=[
  {path:'', component:HomeComponent},
  // {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Contact', component:ContactComponent, canDeactivate:[CandeactivateGaurdService]},
  {path:'Courses', component:CoursesComponent},
  // {path:'Courses/Course/:id', component:CourseComponent},
  {path:'', canActivateChild:[CourseGaurdService], children:[
    {path:'Course/:id', component: CourseComponent}
  ]},
  {path:'**', component:ErrorComponent}
]


@NgModule({

    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule{

}