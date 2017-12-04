import {Pipe, PipeTransform} from '@angular/core';
import {Base} from '../interface/base.interface';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {
  transform(value: Base[], term: string): Base[] {
    if (!term.trim()) {
      return value;
    }
    return value.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
  }
}
