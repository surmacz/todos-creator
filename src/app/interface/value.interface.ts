import {Base} from './base.interface';

export interface Value extends Base {
  is_complete: boolean;
  todo_list: number;
}
