import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html'
})
export class CompletionComponent {
  @Output() onChoose: EventEmitter<boolean|null> = new EventEmitter<boolean|null>();

  emit(value?: boolean) {
    this.onChoose.emit(value);
  }
}
