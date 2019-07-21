import {Component, ViewEncapsulation} from '@angular/core';
import {ActivationEnd, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import ExamplesRoute from './core/interfaces/ExamplesRoute';
import {UserStore} from './components/change-detection/store/user.store';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExamplesComponent {
  constructor(private readonly userStore: UserStore,
              private readonly router: Router, private titleService: Title) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.titleService.setTitle('AngularExamples');
        }
      }
      if (event instanceof ActivationEnd) {
        const config = event.snapshot.routeConfig as ExamplesRoute;
        if (config.title) {
          this.titleService.setTitle(config.title);
        }
      }
    });
  }
  onBackToMainPageClickHandler() {
    this.router.navigate(['/']);
  }
}
