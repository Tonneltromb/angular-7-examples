import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-expand-block',
  templateUrl: './expand-block.component.html',
  styleUrls: ['./expand-block.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ExpandBlockComponent {
  @Input() title: string;
  expand = true;

  onExpandButtonClickHandler() {
    this.expand = !this.expand;
  }
}
