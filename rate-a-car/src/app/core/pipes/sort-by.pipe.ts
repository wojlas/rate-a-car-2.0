import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any[], property: string, isDescending = false): any[] {
    return !isDescending ? value.sortByKey(property) : value.sortByKey(property).reverse();
  }

}
