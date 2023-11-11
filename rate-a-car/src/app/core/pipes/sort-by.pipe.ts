import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  standalone: true,
})
export class SortByPipe implements PipeTransform {

  transform<T>(value: T[], key: string): T[] {
    return value.sortByKey(key);
  }
}
