import {Component, DoCheck, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements DoCheck {
  static doCheckCounter = 0;
  @Input()
  name: string;
  checkPosition: number;
  constructor() {}

  ngDoCheck(): void {
    this.checkPosition = CardComponent.doCheckCounter;
    CardComponent.doCheckCounter++;
  }

}
