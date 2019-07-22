import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {EMPTY, Observable} from 'rxjs';

import {Bird} from './Bird';
import {BirdsStore} from '../stores/birds.store';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class BirdResolver implements Resolve<Bird> {
  constructor(private birdsService: BirdsStore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bird> | Promise<Bird> | Bird {
    const birdId = +route.paramMap.get('birdId');
    return this.birdsService.getBirdById(birdId)
      .pipe(
        map(bird => bird),
        catchError(err => EMPTY)
      );
  }
}
