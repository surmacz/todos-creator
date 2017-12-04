import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Base} from '../../interface/base.interface';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  @Input() item: Base;
  @Output() onToggle: EventEmitter<Base> = new EventEmitter<Base>();

  private emit(item: Base) {
    this.onToggle.emit(item);
  }
}
