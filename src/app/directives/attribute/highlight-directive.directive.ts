import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef) {

   }
  ngOnInit(): void {
    /**
     * directly access code like this is bad parctise use anothr Directive which is resolving this case
     */
    this.elementRef.nativeElement.style.backgroundColor  = 'green';
  }

}
