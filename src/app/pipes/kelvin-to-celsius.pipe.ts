import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'KelvinToCelsius' })

export class KelvinToCelsiusPipe implements PipeTransform {
  transform(value?: string) {
    if (value === undefined) {
      return 0;
    }
    return +value - 273.15;
  }

}
