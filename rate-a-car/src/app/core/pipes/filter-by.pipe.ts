import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform<T>(value: T[], property: keyof T): T[] {
    return value.filter(x => x[property]);
  }

}
