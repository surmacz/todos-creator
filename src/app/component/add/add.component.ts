import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  @Input() placeholder: string;
  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();
  private name: string;

  private add(name: string) {
    this.onAdd.emit(name);
    this.name = '';
  }
}
