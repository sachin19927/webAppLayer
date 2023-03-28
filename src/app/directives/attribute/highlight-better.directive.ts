import { Directive,Renderer2,OnInit, ElementRef,HostListener, HostBinding ,Input} from '@angular/core';

@Directive({
  selector: '[appHighlightBetter]'
})
export class HighlightBetterDirective implements OnInit{


  @Input() defaultColor = 'transparent';
  @Input() highLight = 'blue';


  // Host binding is simple way to find the properties element compared to render add the Style property of dom like below
  @HostBinding('style.backgroundColor') backgroundColor:string | undefined;

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor =this.defaultColor;
  }

  @HostListener('mouseenter') mouserover(eventData:Event){

    //below code commented since using Host Binding is easy no need of render part
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor=this.highLight;

  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
      this.backgroundColor=this.defaultColor;
  }

}
