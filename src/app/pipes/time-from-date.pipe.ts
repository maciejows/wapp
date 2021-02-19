import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFromDate'
})
export class TimeFromDatePipe implements PipeTransform {

  transform(date: string): string {
    return date.slice(date.indexOf('T') + 1, date.indexOf('.'));
  }

}
