import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirectiveDirective } from './attribute/highlight-directive.directive';
import { HighlightBetterDirective } from './attribute/highlight-better.directive';



@NgModule({
  declarations: [
    HighlightDirectiveDirective,
    HighlightBetterDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightDirectiveDirective,
    HighlightBetterDirective
  ]
})
export class DirectiveModule { }
