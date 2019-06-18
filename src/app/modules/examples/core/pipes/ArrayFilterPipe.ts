import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'arrayFilter'})
export class ArrayFilterPipe implements PipeTransform {
  transform(value: any[],
            callback: (...callbackParams: any[]) => boolean,
            ...params: any[]
  ): any[] {
    return value.filter(item => callback(item, ...params));
  }
}
