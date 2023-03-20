import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertDateStringPipe } from './convert-date-string.pipe';
import { ConvertSpacePipePipe } from './convert-space-pipe.pipe';
import { WordShortnerPipe } from './word-shortner.pipe';
import { DataFilterPipe } from './data-filter.pipe';



@NgModule({
  declarations: [
    ConvertDateStringPipe,
    ConvertSpacePipePipe,
    WordShortnerPipe,
    DataFilterPipe
  ],
  imports: [

  ],
  exports:[
    WordShortnerPipe,
    DataFilterPipe
    ]
})
export class PipesModule { }
