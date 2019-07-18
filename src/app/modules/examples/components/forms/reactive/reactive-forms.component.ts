import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface Car {
  mark: string;
  model: string;
  speed: number;
  color: string;
}

@Component({
  templateUrl: './reactive-forms.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ReactiveFormsComponent implements OnInit {
  carFormControl = {
    MARK: 'mark',
    MODEL: 'model',
    SPEED: 'speed',
    COLOR: 'color'
  };
  carColors = ['red', 'black', 'green', 'white'];
  carCreateFormGroup: FormGroup;

  ngOnInit() {
    this.carCreateFormGroup = new FormGroup({
      [this.carFormControl.MARK]: new FormControl(null),
      [this.carFormControl.MODEL]: new FormControl(null),
      [this.carFormControl.SPEED]: new FormControl(null),
      [this.carFormControl.COLOR]: new FormControl(this.carColors[0]),
    });
  }

  onCreateCarFormSubmit() {
    console.log(this.carCreateFormGroup.value);
  }
}
