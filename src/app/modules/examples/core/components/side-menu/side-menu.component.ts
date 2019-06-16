import {Component, ViewEncapsulation} from '@angular/core';

import {CHILDREN} from '../../child-routes';
import TitledRoute from '../../interfaces/TitledRoute';

@Component({
  selector: 'app-examples-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent {
  navItems: TitledRoute[] = CHILDREN;
}
