import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

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
  carCreateForm1: FormGroup;
  carCreateForm2: FormGroup;
  carCreateForm3: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.carCreateForm2 = formBuilder.group({
      [this.carFormControl.MARK]: new FormControl(null),
      [this.carFormControl.MODEL]: new FormControl(null),
      [this.carFormControl.SPEED]: new FormControl(null),
      [this.carFormControl.COLOR]: new FormControl(this.carColors[0]),
    });
    // validation example
    this.carCreateForm3 = formBuilder.group({
      [this.carFormControl.MARK]: new FormControl(null, Validators.required),
      [this.carFormControl.MODEL]: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      [this.carFormControl.SPEED]: new FormControl(null, [Validators.required, Validators.min(20)]),
      [this.carFormControl.COLOR]: new FormControl(this.carColors[0]),
    }, {validators: this.myCustomFormGroupValidator});
  }

  ngOnInit() {
    this.carCreateForm1 = new FormGroup({
      [this.carFormControl.MARK]: new FormControl(null),
      [this.carFormControl.MODEL]: new FormControl(null),
      [this.carFormControl.SPEED]: new FormControl(null),
      [this.carFormControl.COLOR]: new FormControl(this.carColors[0]),
    });
  }

  onCreateCarForm1Submit() {
    console.log(this.carCreateForm1.value);
  }

  onCreateCarForm2Submit() {
    console.log(this.carCreateForm2.value);
  }

  onCreateCarForm3Submit() {
    console.log(this.carCreateForm3.value);
  }

  myCustomFormGroupValidator = (group: FormGroup): ValidationErrors | null => {
    if (group && group.controls) {
      const controls = group.controls;
      const markControl = controls[this.carFormControl.MARK];
      const speedControl = controls[this.carFormControl.SPEED] as FormControl;
      if (markControl.value === 'bugatti' && +speedControl.value < 170) {
        const errors = speedControl.errors || {};
        errors.tooLittleSpeed = true;
        speedControl.setErrors(errors);
      } else {
        if (speedControl.errors) {
          if (speedControl.errors.hasOwnProperty('tooLittleSpeed')) {
            if (Object.keys(speedControl.errors).length > 1) {
              delete speedControl.errors.tooLittleSpeed;
            } else {
              speedControl.setErrors(null);
            }
          }
        }
      }
    }
    return null;
  }
}
