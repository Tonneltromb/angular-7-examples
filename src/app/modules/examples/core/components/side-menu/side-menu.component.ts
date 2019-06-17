import {Component, ViewEncapsulation} from '@angular/core';

import {CHILDREN} from '../../../examples-routing.module';
import TitledRoute from '../../interfaces/TitledRoute';
import {Router} from '@angular/router';

@Component({
  selector: 'app-examples-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent {
  navItems: TitledRoute[] = CHILDREN;

  constructor(private router: Router) {}

  onBackToMainPageClickHandler() {
    this.router.navigate(['/']);
  }
}
