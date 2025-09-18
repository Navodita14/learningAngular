import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGaurdService } from './Services/course-gaurd.service';
import { AuthServiceService } from './Services/auth-service.service';
import { CandeactivateGaurdService } from './Services/candeactivate-gaurd.service';
import { CourseResolveService } from './Services/course-resolve.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    CourseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseGaurdService, AuthServiceService, CandeactivateGaurdService, CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
