import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { Observable } from 'rxjs';



export interface IDeactivateComponent{
  canExit: ()=> Observable<boolean> | Promise<boolean> |boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CandeactivateGaurdService implements CanDeactivate<ContactComponent> {

  constructor() { }

  canDeactivate(component:IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState:RouterStateSnapshot ){
    return component.canExit()
  }
}
