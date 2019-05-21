import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoxComponent implements OnInit {

  @Input() public x: number;
  @Input() public y: number;
  @Input() public num: number;
  @Input() public selected: boolean;
  color: string;

  constructor() {}

  ngOnInit() {
    this.color = `rgba(${this.getRandomValue()}, ${this.getRandomValue()}, ${this.getRandomValue()}, 0.5)`;
  }
  getRandomValue() {
    return Math.floor((Math.random() * 255) + 1);
  }
}
