import { Component, OnInit } from '@angular/core';
import { ServiceService } from './Services/service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from './Services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceService]
})
export class AppComponent implements OnInit{
  title = 'AngularRouting';
  constructor(private courseService: ServiceService, private acticatedRoute: ActivatedRoute, private authService: AuthServiceService){}
  

  courses:any[] = [];

  ngOnInit(): void {
    // this.acticatedRoute.fragment.subscribe((val)=>{
    //   console.log(val);
    //   if(val!=null){
    //     this.jumpTo(val)
    //   }
      
    // })
  }

  isLogin=this.authService.IsAuthenticated()
  jumpTo(section:string){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
  }

  login(){
    this.authService.login()
    this.isLogin=this.authService.IsAuthenticated()
  }
  logout(){
    this.authService.logout()
    this.isLogin=this.authService.IsAuthenticated()
  }

}
