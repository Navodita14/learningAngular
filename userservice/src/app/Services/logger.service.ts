import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  LogMessage(name:string, status:string){
    console.log(`A new user named ${name} has logged with status ${status}`);
    
  }
}
