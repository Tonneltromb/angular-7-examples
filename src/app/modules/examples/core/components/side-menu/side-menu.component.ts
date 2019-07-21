import {Component, ViewEncapsulation} from '@angular/core';

import {CHILDREN} from '../../../examples-routing.module';
import {RouteGroupTag} from '../../RouteGroupTag';
import ExamplesRoute from '../../interfaces/ExamplesRoute';

@Component({
  selector: 'app-examples-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent {
  navItems: ExamplesRoute[] = CHILDREN;
  routeTags: RouteGroupTag[] = RouteGroupTag.values();
  filterItemsCallback(item: ExamplesRoute, group: RouteGroupTag) {
    return item.tag === group;
  }
}
