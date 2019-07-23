import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  templateUrl: './regex.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RegexpComponent implements OnInit {
  numberCheck: FormControl;

  ngOnInit(): void {
    this.numberCheck = new FormControl(0, this.numberValidator);
  }

  numberValidator = (control: FormControl) => {
    const value = control.value;
    if (value.toString().search(/^([1-9]\d*|0+)(\.\d{1,2})*$/) < 0) {
      return {'invalid value': true};
    }
    return null;
  };
}
