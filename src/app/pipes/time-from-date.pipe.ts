import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFromDate'
})
export class TimeFromDatePipe implements PipeTransform {

  transform(date: string): string {
    console.log(date);
    return date.slice(date.indexOf('T') + 1, date.indexOf('.'));
  }

}
