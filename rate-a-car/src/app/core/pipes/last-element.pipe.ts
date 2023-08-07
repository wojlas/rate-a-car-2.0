import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastElement'
})
export class LastElementPipe implements PipeTransform {

  transform(value: unknown[]): unknown {
    return value.length ? value.lastElement() : '';
  }

}
