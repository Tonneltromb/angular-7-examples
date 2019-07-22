import { Component, ViewEncapsulation } from '@angular/core';

import {BirdsStore} from '../../stores/birds.store';

@Component({
  templateUrl: './birds-list.component.html',
  encapsulation: ViewEncapsulation.None
})

export class BirdsListComponent {
  constructor(public birdsService: BirdsStore) {}
}
