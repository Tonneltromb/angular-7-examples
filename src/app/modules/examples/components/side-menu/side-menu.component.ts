import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CHILDREN} from '../../examples-routing.module';
import {ExamplesRoute} from '../../entities/Route';

@Component({
  selector: 'app-examples-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent implements OnInit {
  navItems: ExamplesRoute[] = CHILDREN;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onNavigationItemClickHandler(item: string) {
    this.router.navigate([item], {relativeTo: this.activatedRoute})
      .catch(error => console.log(error.message));
  }
}
