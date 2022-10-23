import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkboxfilter'
})
export class CheckboxfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
