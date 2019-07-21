import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StructuralDirectivesComponent {
  showHeaderWithGreenColor = false;
  showHeaderWithRedColor = false;
  showHeaderWithYellowColor = false;

  onShowHeaderWithGreenColorButtonClickHandler() {
    this.showHeaderWithGreenColor = !this.showHeaderWithGreenColor;
  }

  onShowHeaderWithRedColorButtonClickHandler() {
    this.showHeaderWithRedColor = !this.showHeaderWithRedColor;
  }

  onShowHeaderWithYellowColorButtonClickHandler() {
    this.showHeaderWithYellowColor = !this.showHeaderWithYellowColor;
  }
}
