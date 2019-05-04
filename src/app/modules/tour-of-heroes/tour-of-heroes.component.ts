import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tour-of-heroes',
  template: `
    <h1>Tour of Heroes</h1>
    <nav>
      <a routerLink="/heroes/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <app-messages></app-messages>`,
  styleUrls: ['./tour-of-heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TourOfHeroesComponent {
}
