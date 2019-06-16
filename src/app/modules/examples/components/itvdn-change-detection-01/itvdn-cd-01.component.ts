import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-example-one-test',
  templateUrl: './itvdn-cd-01.component.html',
  styleUrls: ['./itvdn-cd-01.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4200', true);
    xhr.addEventListener('load', () => console.log('load'));
    xhr.addEventListener('error', () => console.log('error'));
    xhr.send();
  }
}
