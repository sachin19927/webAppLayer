import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
  pure: false
})
export class DataFilterPipe implements PipeTransform {

  transform(value: any, filterString:any,propKeyName:string): any {

    if(value.length===0 || filterString ==='')
    {
      return value;
    }
    const resultArray = [];
    for(const item of value)
    {
      if(item[propKeyName]===filterString)
      resultArray.push(item)
    }
    return resultArray;
  }

}
