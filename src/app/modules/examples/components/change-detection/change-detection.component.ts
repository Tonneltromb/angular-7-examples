import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserStore} from './store/user.store';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {
  constructor(private readonly userStore: UserStore) {}
  ngOnInit(): void {
    setTimeout(() => {
      console.log('user changed');
      this.userStore.changeUser(0, {...this.userStore.users[0], name: 'Greg'});
    }, 3000);
  }
}
