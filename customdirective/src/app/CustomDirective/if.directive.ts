import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template:TemplateRef<any>, private view: ViewContainerRef) { }

  @Input('appIf') set displayView(condition : boolean){
    if(condition){
      this.view.createEmbeddedView(this.template)
    }else{
      this.view.clear();
    }
  }

}
