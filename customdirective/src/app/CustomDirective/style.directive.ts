import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @Input() set setStyle(styles: Object){
    let entries=Object.entries(styles)
    for(let entry of entries){
      this.renderer.setStyle(this.el.nativeElement, entry[0], entry[1])
    }
  }

}
