import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import {Hero} from '../entities/Hero';
import {HEROES} from '../stores/heroes.store';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
