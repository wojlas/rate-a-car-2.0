import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  standalone: true
})
export class SortByPipe implements PipeTransform {

  transform(value: unknown[], key: string): unknown[] {
    return value.sortByKey(key);
  }

}
