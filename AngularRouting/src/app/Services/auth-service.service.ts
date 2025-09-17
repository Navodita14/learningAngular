import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  loggedIn: boolean=false

  login(){
    this.loggedIn=true
  }
  logout(){
    this.loggedIn=false
  }

  IsAuthenticated(){
    return this.loggedIn
  }
}
