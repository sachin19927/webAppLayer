import { Directive ,Input,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // appUnless should be same as driective selector and property tag
  @Input() set appUnless(condition:boolean){
    if(!condition){
      this.vcrf.createEmbeddedView(this.template)
    }
    else
    {
      this.vcrf.clear;
    }
  }

  constructor(private template:TemplateRef<any>,private vcrf : ViewContainerRef) { }

}
