import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BoxComponent implements OnInit, AfterViewInit {

  color: string;
  @Input() public x: number;
  @Input() public y: number;
  @Input() public selected: boolean;
  @ViewChild('div')
  set div(value: ElementRef) {
    if (value) {
      value.nativeElement.BoxComponent = this;
    }
  }

  constructor(private chD: ChangeDetectorRef) {}

  ngOnInit() {
    this.color = `rgba(${this.getRandomValue()}, ${this.getRandomValue()}, ${this.getRandomValue()}, 0.5)`;
  }
  ngAfterViewInit() {
    this.chD.detach();
  }
  getRandomValue() {
    return Math.floor((Math.random() * 255) + 1);
  }
  update() {
    this.chD.detectChanges();
  }
}
