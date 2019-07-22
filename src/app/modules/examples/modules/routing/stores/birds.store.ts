import {of, throwError} from 'rxjs';

import {Bird} from '../core/Bird';

export class BirdsStore {
  BIRDS: Bird[] = [
    {id: 1, name: 'colibri', color: 'red', voice: 'piu-piu'},
    {id: 2, name: 'owl', color: 'grey', voice: 'wuh-wuh'},
    {id: 3, name: 'canary', color: 'orange', voice: 'fui-fui'},
  ];

  addBird(bird: Bird) {
    this.BIRDS.push(bird);
  }

  getBirdById(id: number) {
    if (id === 2) {
      return throwError('bad bird id');
    }
    return of(this.BIRDS.find(bird => bird.id === id));
  }
}
