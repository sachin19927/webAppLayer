import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirectiveDirective } from './attribute/highlight-directive.directive';
import { HighlightBetterDirective } from './attribute/highlight-better.directive';
import { UnlessDirective } from './structure/unless.directive';



@NgModule({
  declarations: [
    HighlightDirectiveDirective,
    HighlightBetterDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightDirectiveDirective,
    HighlightBetterDirective,
    UnlessDirective
  ]
})
export class DirectiveModule { }
