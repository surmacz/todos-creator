import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {
  @Input() placeholder: string;
  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  private add(name: string) {
    this.onAdd.emit(name);
  }

  private search(term: string) {
    this.onSearch.emit(term);
  }
}
