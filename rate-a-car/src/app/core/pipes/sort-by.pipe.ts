import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform<T>(value: T[], property: keyof T, isDescending = true): T[] {
    return !isDescending ? value.sortByKey(property as string) : value.sortByKey(property as string).reverse();
  }

}
