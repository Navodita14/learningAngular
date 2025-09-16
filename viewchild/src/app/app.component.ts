import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild';

  @ViewChild('dobInput') dateofBirth: ElementRef;
  @ViewChild('ageInput') age: ElementRef;
  @ViewChild(DemoComponent, {static: true}) demoComp: DemoComponent;
  
  calculateAge(){
    let birthyear= new Date( this.dateofBirth.nativeElement.value).getFullYear();
    let currentYear= new Date().getFullYear();
    let age=currentYear-birthyear;
    this.age.nativeElement.value= age;
  }
}
