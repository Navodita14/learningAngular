import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // dataEmitter= new EventEmitter<string>();

  dataEmitter=new Subject<string>();

  raiseDataEventEmitter(data:string){
    this.dataEmitter.next(data)
  }
}
