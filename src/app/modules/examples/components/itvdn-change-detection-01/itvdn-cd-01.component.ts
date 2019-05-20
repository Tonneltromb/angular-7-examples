import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-example-one-test',
  templateUrl: './itvdn-cd-01.component.html',
  styleUrls: ['./itvdn-cd-01.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ITVDNChangeDetection01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickHandler() {
    console.log('was clicked');
  }

  onTimerStartClickHandler() {
    setInterval(() => {
    }, 2000);
  }

  onAjaxSendClickHandler() {
    axios.get('http://localhost:4200')
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }
}
