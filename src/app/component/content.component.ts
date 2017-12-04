import {Component} from '@angular/core';
import {Base} from '../interface/base.interface';
import {ListService} from '../service/list.service';

@Component({})
export abstract class ContentComponent {
  protected items: Base[];
  protected searchTerm = '';

  constructor(protected listService: ListService) {}

  protected static validateName(name: string): boolean {
    return !!name && !!name.trim();
  }

  protected setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  protected refreshItems() {
    this.items = this.items.slice();
  }

  protected abstract addItem(name: string);
  protected abstract removeItem(toRemove: Base);
  protected abstract updateItem(itemToUpdate: Base);
}
