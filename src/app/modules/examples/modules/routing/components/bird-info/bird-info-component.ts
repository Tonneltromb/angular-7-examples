import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BirdsStore} from '../../stores/birds.store';
import {Bird} from '../../core/Bird';

@Component({
  templateUrl: './bird-info-component.html',
  encapsulation: ViewEncapsulation.None
})

export class BirdInfoComponent implements OnInit {
  bird: Bird;

  constructor(private readonly birdsService: BirdsStore,
              private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.bird = data.bird);
  }

}
