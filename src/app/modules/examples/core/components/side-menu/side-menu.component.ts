import {Component, ViewEncapsulation} from '@angular/core';

import {CHILDREN} from '../../../examples-routing.module';
import {Router} from '@angular/router';
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
  constructor(private router: Router) {}
  onBackToMainPageClickHandler() {
    this.router.navigate(['/']);
  }
  filterItemsCallback(item: ExamplesRoute, group: RouteGroupTag) {
    return item.tag === group;
  }
}
