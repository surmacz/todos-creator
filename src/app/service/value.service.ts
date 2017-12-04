import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ApiService} from './api.service';
import {Value} from '../interface/value.interface';
import {List} from '../interface/list.interface';

@Injectable()
export class ValueService extends ApiService {
  constructor(private http: HttpClient) {
    super();
  }

  fetch(list: List): Observable<Value[]> {
    return this.http.get<Value[]>(`${this.url}/todolists/${list.id}`);
  }

  create(todo: { name: string; is_complete: boolean; todo_list: number; }): Observable<Value> {
    return this.http.post<Value>(`${this.url}/todos/`, todo);
  }

  update(todo: Value): Observable<Value> {
    return this.http.put<Value>(`${this.url}/todos/${todo.id}/`, todo);
  }

  remove(todo: Value): Observable<void> {
    return this.http.delete<void>(`${this.url}/todos/${todo.id}/`);
  }
}
