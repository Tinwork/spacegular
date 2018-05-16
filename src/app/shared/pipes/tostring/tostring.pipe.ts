import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tostring'
})
export class TostringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let text: String = '';
    
    if (typeof value !== 'object') {
      return value;
    }

    Object.keys(value).forEach((v, idx) => {
      if (idx === 0) {
        text += `${v}: ${value[v]}`;
      } else {
        text += `, ${v}: ${value[v]}`;
      }
    });

    return text;
  }

}
