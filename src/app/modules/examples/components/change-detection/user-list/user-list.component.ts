import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
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
  public counter: number;
  constructor(public userStore: UserStore,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  ngDoCheck(): void {
    this.counter = ++UserListComponent.checksCount;
    console.log('[UserListComponent] ', UserListComponent.checksCount);
  }

  onDetachClickHandler() {
    this.cd.detach();
  }

  onDetectChangesClickHandler() {
    this.cd.detectChanges();
  }

  onMarkForCheckClickHandler() {
    this.cd.markForCheck();
  }
}
