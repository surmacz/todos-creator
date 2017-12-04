import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class SearchComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  private subject = new Subject<string>();
  private items$: Observable<string>;

  search(term: string) {
    this.subject.next(term);
  }

  ngOnInit() {
    this.items$ = this.subject.pipe(debounceTime(200), distinctUntilChanged());
    this.items$.subscribe(term => this.onSearch.emit(term));
  }
}
