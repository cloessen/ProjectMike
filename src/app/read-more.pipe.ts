import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  stringLength = 500;

  transform(value: string, args?: any): any {
    if (value.length <= this.stringLength) {
      return value;
    } else {
      const trimmedString = value.substr(0, this.stringLength);
      return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
        + ' __[mehr...](https://google.com "mehr...")__';
    }
  }

}