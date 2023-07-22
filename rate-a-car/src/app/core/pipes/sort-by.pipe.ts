import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform<T>(value: T[], property: keyof T, isDescending = true, valueOnTop?: string): T[] {
    if (!value) {
      return [];
    }

    if (valueOnTop) {
      const valIndex = value.findIndex(x => {
        const prop = x[property] as string;
        return prop.toLowerCase() === valueOnTop.toLowerCase()
      });

      return [value[valIndex], ...value.filter(x => {
        const prop = x[property] as string;
        return prop.toLowerCase() !== valueOnTop
      }).sortByKey(property as string)];
    }
    
    return isDescending ? value.sortByKey(property as string) : value.sortByKey(property as string).reverse();
  }

}
