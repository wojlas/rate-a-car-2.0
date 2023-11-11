import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  standalone: true,
})
export class SortByPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {
    return value.sortByKey(key);
  }
}
