import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: './template-driven-forms.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TemplateDrivenFormsComponent {
  @ViewChild('userForm_5') patchedUserForm: NgForm;
  public cities: Array<{ name: string, value: string; }> = [
    {name: 'Moscow', value: 'msc'},
    {name: 'St.Petersburg', value: 'spb'},
    {name: 'N.Novgorod', value: 'nino'}
  ];
  public accountTypes: Array<{ title: string, value: number; }> = [
    {title: 'Free', value: 1},
    {title: 'Basic', value: 2},
    {title: 'Master', value: 3}
  ];
  registerUser(userForm: NgForm) {
    console.log(userForm.value);
    userForm.reset({
      name: '',
      age: '',
      city: this.cities[0].value,
      'account-type': this.accountTypes[0].value,
    });
  }

  onDoubleAgeClickHandler() {
    const age = this.patchedUserForm.value.age;
    this.patchedUserForm.form.patchValue({
      age: age * 2
    });
  }
}
