import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Value} from '../../interface/value.interface';
import {ValueService} from '../../service/value.service';
import {List} from '../../interface/list.interface';
import {ListService} from '../../service/list.service';
import {ContentComponent} from '../content.component';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
  providers: [ValueService, ListService]
})
export class ValueComponent extends ContentComponent implements OnInit {
  private list: List;
  private completionState: boolean|null = null;

  constructor(
    listService: ListService,
    private valueService: ValueService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    super(listService);
  }

  ngOnInit() {
    const listId = +this.route.snapshot.paramMap.get('id');
    this.listService.fetch().subscribe(listItems => {
      this.list = listItems.find(item => item.id === listId);
      this.valueService.fetch(this.list).subscribe(todoItems => this.items = todoItems);
    });
  }

  protected removeItem(toRemove: Value) {
    this.valueService.remove(toRemove)
      .subscribe(
        () => {this.refreshItems(); this.items.splice(this.items.findIndex(item => item === toRemove), 1); },
        error => console.log(error)
      );
  }

  protected addItem(name: string) {
    if (!ContentComponent.validateName(name)) {
      return;
    }
    this.valueService.create({name: name, is_complete: false, todo_list: this.list.id})
      .subscribe(item => {this.refreshItems(); this.items.push(item); });
  }

  protected updateItem(itemToUpdate: Value) {
    this.valueService.update(itemToUpdate)
      .subscribe(
        updatedItem => {
          this.refreshItems();
          this.items.splice(this.items.findIndex(item => item.id === itemToUpdate.id), 1, updatedItem);
        },
        error => console.log(error)
      );
  }

  private setCompletionState(state?: boolean) {
    this.completionState = state;
  }

  private back() {
    this.location.back();
  }
}
