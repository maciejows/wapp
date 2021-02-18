import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string): string {
    let dateFromApi = value.slice(value.indexOf('-') + 1);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');

    return (dateFromApi == `${mm}-${dd}`)? 'Today' : dateFromApi;
  }

}
