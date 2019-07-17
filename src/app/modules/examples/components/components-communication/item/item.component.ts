import {Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Item} from '../items-holder/items-holder.component';

@Component({
  selector: 'app-item-cc',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})

export class ItemComponent {
  @Input() item: Item;
  @Output() itemChangeEvent = new EventEmitter<Item>();
  @ViewChild('titleInput') titleInput: ElementRef;
  onNameChangeClickHandler() {
    const changedItem = {...this.item, title: this.titleInput.nativeElement.value};
    this.itemChangeEvent.emit(changedItem);
  }
}
