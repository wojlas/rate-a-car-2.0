import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any[], property: string, isDescending = false): any[] {
    return value.sort((a, b) => a[property] > b[property] ? 1 : -1);
  }

}
