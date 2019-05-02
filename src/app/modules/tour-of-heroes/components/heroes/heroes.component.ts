import {Component, OnInit} from '@angular/core';

import {Hero} from '../../entities/Hero';
import {HeroService} from '../../services/hero.service';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.messageService.add('HeroService: fetched Heroes');
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
