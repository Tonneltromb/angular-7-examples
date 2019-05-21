import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-example-one-test',
  templateUrl: './itvdn-cd-01.component.html',
  styleUrls: ['./itvdn-cd-01.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ITVDNChangeDetection01Component implements OnInit {
  private intervalId: number;
  constructor() { }

  ngOnInit() {
  }

  onClickHandler() {
    console.log('was clicked');
  }

  onStartIntervalClickHandler() {
    this.intervalId = setInterval(() => {
    }, 2000);
  }
  onStopIntervalClickHandler() {
    clearInterval(this.intervalId);
  }

  onAjaxSendClickHandler() {
    // axios.get('http://localhost:4200')
    //   .then(r => console.log(r))
    //   .catch(e => console.log(e));
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4200', true);
    xhr.addEventListener('load', () => console.log('load'));
    xhr.addEventListener('error', () => console.log('error'));
    xhr.send();
  }
}
