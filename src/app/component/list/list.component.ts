import {Component, OnInit} from '@angular/core';
import {List} from '../../interface/list.interface';
import {ListService} from '../../service/list.service';
import {ContentComponent} from '../content.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent extends ContentComponent implements OnInit {
  ngOnInit() {
    this.listService.fetch().subscribe(items => this.items = items);
  }

  protected removeItem(toRemove: List) {
    this.listService.remove(toRemove)
      .subscribe(
      () => {this.refreshItems(); this.items.splice(this.items.findIndex(item => item === toRemove), 1); }
      );
  }

  protected updateItem(itemToUpdate: List) {
    this.listService.update(itemToUpdate)
      .subscribe(updatedItem => {
        this.refreshItems();
        this.items.splice(this.items.findIndex(item => item.id === itemToUpdate.id), 1, updatedItem);
      });
  }

  protected addItem(name: string) {
    if (!ContentComponent.validateName(name)) {
      return;
    }
    this.listService.create(name).subscribe(item => {this.refreshItems(); this.items.push(item); });
  }
}
