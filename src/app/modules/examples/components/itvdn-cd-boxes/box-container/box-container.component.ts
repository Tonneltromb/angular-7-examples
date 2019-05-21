import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoxContainerComponent implements OnInit {

  currentId: number = null;
  offsetX: number;
  offsetY: number;
  boxes = [];
  size = 1000;

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.size; i++) {
      const randX = Math.floor((Math.random() * 800) + 1);
      const randY = Math.floor((Math.random() * 800) + 1);
      this.boxes[i] = {x: randX, y: randY, num: i};
    }
  }

  onMouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(this.currentId, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  onMouseUp(event) {
    this.currentId = null;
  }

  onMouseDown(event) {
    const id = event.target.getAttribute('data-my-id');
    if (id !== null) {
      const box = this.boxes[id];
      this.offsetX = box.x - event.clientX;
      this.offsetY = box.y - event.clientY;
      this.currentId = id;
    }
  }

  updateBox(id: number, x: number, y: number) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
