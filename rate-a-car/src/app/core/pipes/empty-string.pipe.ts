import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyString',
  standalone: true
})
export class EmptyStringPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return value ?? '';
  }
}
