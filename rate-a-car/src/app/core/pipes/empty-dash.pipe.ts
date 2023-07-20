import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyDash'
})
export class EmptyDashPipe implements PipeTransform {

  transform(value: string): string {
    return value && value !== '' ? value : '-';
  }

}
