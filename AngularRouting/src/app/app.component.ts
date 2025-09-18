import { Component, OnInit } from '@angular/core';
import { ServiceService } from './Services/service.service';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthServiceService } from './Services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceService]
})
export class AppComponent implements OnInit{
  title = 'AngularRouting';
  constructor(private courseService: ServiceService, private acticatedRoute: ActivatedRoute, private authService: AuthServiceService, private router:Router){}
  
  displayLoadingIndicator=false;

  courses:any[] = [];

  ngOnInit(): void {
    // this.acticatedRoute.fragment.subscribe((val)=>{
    //   console.log(val);
    //   if(val!=null){
    //     this.jumpTo(val)
    //   }
      
    // })

    this.router.events.subscribe((routerEvent)=>{
      if(routerEvent instanceof NavigationStart){
        this.displayLoadingIndicator=true
      }

      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ){
 
       this.displayLoadingIndicator=false
      }
    })
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
