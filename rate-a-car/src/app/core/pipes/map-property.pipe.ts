import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapProperty'
})
export class MapPropertyPipe implements PipeTransform {

  transform(value: any, property: string): string {
    return value[property];
  }

}
