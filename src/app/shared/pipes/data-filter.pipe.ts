import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
  pure: false
})
export class DataFilterPipe implements PipeTransform {

  transform(value: any, filterString:string,propKeyName:string): any {

    if(filterString === '' || value.length === 0)
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
