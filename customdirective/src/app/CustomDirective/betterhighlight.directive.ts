import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor( private el : ElementRef, private render: Renderer2) { }

  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='pink'
  @HostBinding('style.backgroundColor') background:string=this.defaultColor;

  @HostBinding('style.border') border:string='none';

  ngOnInit(): void {
    this.background=this.defaultColor
  }

  @HostListener('mouseenter') mouseenter(){
    this.background=this.highlightColor
    this.border='solid black 2px'
  }

  @HostListener('mouseleave') mouseleave(){
    this.background=this.defaultColor
    this.border='none'
  }
}
