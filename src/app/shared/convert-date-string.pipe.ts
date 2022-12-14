import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDateString'
})
export class ConvertDateStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
