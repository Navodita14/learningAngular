import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import {  interval, Observable, Subscription } from 'rxjs';
import { of, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent implements OnInit{
  title = 'angularobservables';

  constructor(private dataServce:DataService){}

  // myObservable= new Observable((observer)=>{
  //   console.log('Observable Starts');
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   // setTimeout(()=>{observer.error(new Error("try later"))},3000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.next("5")},5000)
  //   setTimeout(()=>{observer.complete()}, 6000)
    
  // })

  // myObservable= Observable.create((observer )=>{
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   // setTimeout(()=>{observer.error(new Error("try later"))},3000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.next("5")},5000)
  //   setTimeout(()=>{observer.complete()}, 6000)
  // })


  array1=[1,2,3,4,5,6,7]
  array2= ['a','b','c']

  // myObservable= of(this.array1, this.array2);

  // myObservable= from(this.array1).pipe(map((val)=>{
  //   return val*5;
  // }), filter((val)=>{
  //   return val>=30;
  // }))

  // transformObservable= this.myObservable.pipe(map((val)=>{
  //   return val*5;
  // }), filter((val)=>{
  //   return val>=30;
  // }))

  // filterObservavle= this.transformObservable.pipe(filter((val)=>{
  //   return val>=30;
  // }))

  counterObservable=interval(500)
  counterSub:Subscription;

  ngOnInit(): void {
    // this.myObservable.subscribe((val:any)=>{
    //   console.log(val); 
    // }, (error:any)=>{
    //   alert(error);
    // }, ()=>{
    //   alert("Completed")
    // })

    


  }

  unsubscribe(){
    this.counterSub.unsubscribe();
  }
  subscribe(){
    this.counterSub=this.counterObservable.subscribe((val)=>{
      console.log(val);
      
    })
  }
}
