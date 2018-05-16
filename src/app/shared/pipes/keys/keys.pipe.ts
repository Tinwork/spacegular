import { Pipe, PipeTransform } from '@angular/core';

/**
 * Keys Pipe
 *  return the keys of an object
 *  this is useful when looping threw unknown objects
 */
@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (Array.isArray(value))
      return Object.keys(value[0]);

    return Object.keys(value);
  }

}
