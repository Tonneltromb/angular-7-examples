import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  templateUrl: './regex.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RegexpComponent {
  constructor() {}

  numberCheck = new FormControl(0, (control) => {
    const value = control.value;
    if (value.toString().search(/^([1-9]\d*|0+)(\.\d{1,2})*$/) < 0) {
      return {'invalid value': true};
    }
    return null;
  });
}