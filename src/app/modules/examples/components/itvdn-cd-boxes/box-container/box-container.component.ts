import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';

import {BoxComponent} from '../box/box.component';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BoxContainerComponent implements OnInit, AfterViewInit {

  offsetX: number;
  offsetY: number;
  boxes = [];
  size = 2000;
  currentBox: BoxComponent = null;

  constructor(private chD: ChangeDetectorRef) {}

  ngOnInit() {
    for (let i = 0; i < this.size; i++) {
      const randX = Math.floor((Math.random() * 800) + 1);
      const randY = Math.floor((Math.random() * 800) + 1);
      this.boxes[i] = {x: randX, y: randY};
    }
  }

  ngAfterViewInit() {
    this.chD.detach();
  }

  onMouseMove(event) {
    event.preventDefault();
    if (this.currentBox !== null) {
      this.updateBox(this.currentBox, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  onMouseUp(event) {
    if (this.currentBox) {
      this.currentBox.selected = false;
      this.currentBox.update();
    }
    this.currentBox = null;
  }
  onMouseDown(event) {
    const box = event.target.BoxComponent as BoxComponent;
    if (box) {
      this.offsetX = box.x - event.clientX;
      this.offsetY = box.y - event.clientY;
      this.currentBox = box;
      box.selected = true;
      box.update();
    }
  }
  updateBox(box: BoxComponent, x: number, y: number) {
    box.x = x;
    box.y = y;
    box.update();
  }
}
