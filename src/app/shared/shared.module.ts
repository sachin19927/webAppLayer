import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertSpacePipePipe } from './convert-space-pipe.pipe';
import { ConvertDateStringPipe } from './convert-date-string.pipe';



@NgModule({
  declarations: [
    ConvertSpacePipePipe,
    ConvertDateStringPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
