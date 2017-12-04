import {Pipe, PipeTransform} from '@angular/core';
import {Value} from '../interface/value.interface';

@Pipe({
  name: 'completionFilter'
})
export class CompletionFilterPipe implements PipeTransform {
  transform(value: Value[], state?: boolean): Value[] {
    if (state === null) {
      return value;
    }
    return value.filter(item => item.is_complete === state);
  }
}
