import {ChangeDetectionStrategy, Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {UserStore} from '../store/user.store';

@Component({
  selector: 'app-cd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit, DoCheck {
  static checksCount = 0;
  constructor(public userStore: UserStore) { }

  ngOnInit() {
  }
  ngDoCheck(): void {
    console.log('[UserListComponent] ', ++UserListComponent.checksCount);
  }

}
