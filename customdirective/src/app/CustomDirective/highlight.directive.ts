import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor( private el:ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f1948a');
    this.renderer.addClass(this.el.nativeElement,'container');
    this.renderer.setAttribute(this.el.nativeElement, 'title', 'This is exampe div')
  }
}
