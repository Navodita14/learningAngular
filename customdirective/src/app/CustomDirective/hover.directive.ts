import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el : ElementRef, private rendered: Renderer2) { }

  @HostListener('mouseenter') onmouseover(){
    this.rendered.setStyle(this.el.nativeElement, 'padding', '30px 30px')
        this.rendered.setStyle(this.el.nativeElement, 'margin', '5px 10px')
            this.rendered.setStyle(this.el.nativeElement, 'transition', '0.5s')
  }
  @HostListener('mouseleave') onmouseout(){
    this.rendered.setStyle(this.el.nativeElement, 'padding', '10px 20px')
        this.rendered.setStyle(this.el.nativeElement, 'margin', '10px 20px')
            this.rendered.setStyle(this.el.nativeElement, 'transition', '0.5s')
  }

}
