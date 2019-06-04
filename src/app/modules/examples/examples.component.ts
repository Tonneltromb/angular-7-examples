import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserStore} from './components/change-detection/store/user.store';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  constructor(private readonly userStore: UserStore) {}
  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('user changed');
    //   this.userStore.changeUser(0, {...this.userStore.users[0], name: 'Greg'});
    // }, 3000);
  }
}
