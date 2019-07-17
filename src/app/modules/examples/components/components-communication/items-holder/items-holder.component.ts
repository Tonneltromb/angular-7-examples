import {Component, ViewEncapsulation} from '@angular/core';

export interface Item {
  title: string;
  description: string;
  count: number;
}

@Component({
  templateUrl: './items-holder.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ItemsHolderComponent {
  items: Item[] = [
    {title: 'item 1', count: 2, description: 'first item'},
    {title: 'item 2', count: 1, description: 'another item'},
  ];

  onItemChange(item: Item, index) {
    this.items[index] = item;
  }
}
