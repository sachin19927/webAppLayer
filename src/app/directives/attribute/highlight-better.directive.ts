import { Directive,Renderer2,OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightBetter]'
})
export class HighlightBetterDirective implements OnInit{

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }

}
