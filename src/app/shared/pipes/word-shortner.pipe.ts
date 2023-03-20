import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordShortner'
})
export class WordShortnerPipe implements PipeTransform {

  transform(value: string,limit:number) {
    if(value!=null && value.length>limit){
    return value.substring(0,limit)+"..."
    }
    return value;
  }

}
