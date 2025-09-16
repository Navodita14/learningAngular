import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customdirective';
  active: boolean = false;

  display: boolean = false;

  occupation: string = 'lawyer';

  DisplayNotice(){
    this.active=!this.active
    this.display = true;
  }
}
