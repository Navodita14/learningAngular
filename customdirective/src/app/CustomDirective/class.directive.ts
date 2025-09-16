import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { log } from 'console';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private el:ElementRef, private rendered: Renderer2) { }

  @Input('appClass') set display(value:Object){
   let enteries= Object.entries(value)
   console.log(enteries);
   for(let [className, condition] of enteries){
    if(condition){
      this.rendered.addClass(this.el.nativeElement, className)
    }
   }
   
  }
}
