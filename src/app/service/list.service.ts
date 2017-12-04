import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {List} from "../interface/list.interface";
import {ApiService} from './api.service';

@Injectable()
export class ListService extends ApiService {
  constructor(private http: HttpClient) {
    super();
    this.url += '/todolists/';
  }

  fetch(): Observable<List[]> {
    return this.http.get<List[]>(this.url);
  }

  create(name: string): Observable<List> {
    return this.http.post<List>(this.url, {name: name});
  }

  update(item: List): Observable<List> {
    return this.http.put<List>(`${this.url}${item.id}/`, {name: item.name});
  }

  remove(item: List): Observable<void> {
    return this.http.delete<void>(`${this.url}${item.id}`);
  }
}
