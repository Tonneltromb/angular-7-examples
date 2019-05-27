import {ChangeDetectionStrategy, Component, DoCheck, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, DoCheck {
  static checksCount = 0;
  @Input()
  public name: string;
  @Input()
  public age: number;
  @Input()
  public email: string;
  count = 0;
  constructor() {
  }

  ngOnInit() {
  }
  ngDoCheck() {
    this.count = UserComponent.checksCount++;
    console.log('[UserComponent] ', UserComponent.checksCount);
  }

}
