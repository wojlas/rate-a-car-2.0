import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastElement',
  standalone: true
})
export class LastElementPipe implements PipeTransform {

  transform(value: unknown[]): unknown {
    return value.lastElement();
  }

}
