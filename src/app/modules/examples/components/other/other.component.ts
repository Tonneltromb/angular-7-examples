import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: './other.component.html',
  encapsulation: ViewEncapsulation.None
})
export class OtherComponent {
  showColors = false;
  colors = ['red', 'blue', 'lightgreen'];
  onShowColorsClickHandler() {
    this.showColors = !this.showColors;
  }
}
