import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, DoCheck {
  static checksCount = 0;
  @Input()
  public name: string;
  @Input()
  public version: number;
  @Input()
  public age: number;
  @Input()
  public email: string;
  count = 0;
  detached = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.count = UserComponent.checksCount;
    console.log(`[UserComponent] ${this.name}`, UserComponent.checksCount);
    ++UserComponent.checksCount;
  }

  onDetectChangesClickHandler() {
    this.cd.detectChanges();
  }

  onMarkForCheckClickHandler() {
    this.cd.markForCheck();
  }

  onDetachClickHandler() {
    this.detached = true;
    this.cd.detach();
    console.log(this.count);
    this.cd.detectChanges();
  }

  onReattachClickHandler() {
    this.detached = false;
    this.cd.reattach();
  }
}
