import {NgModule} from '@angular/core';
import {ExamplesRoutingModule} from './examples-routing.module';
import {CommonModule} from '@angular/common';

import {SideMenuComponent} from './core/components/side-menu/side-menu.component';
import {ITVDNChangeDetection01Component} from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import {ChangeDetectionComponent} from './components/change-detection/change-detection.component';
import {CardComponent} from './components/itvdn-change-detection-01/card/card.component';
import {UserComponent} from './components/change-detection/user/user.component';
import {UserListComponent} from './components/change-detection/user-list/user-list.component';
import {UserStore} from './components/change-detection/store/user.store';
import {ExamplesComponent} from './examples.component';
import {ArrayFilterPipe} from './core/pipes/ArrayFilterPipe';

@NgModule({
  declarations: [
    ExamplesComponent,
    SideMenuComponent,
    ITVDNChangeDetection01Component,
    CardComponent,
    ChangeDetectionComponent,
    UserComponent,
    UserListComponent,
    ArrayFilterPipe
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
  ],
  providers: [UserStore]
})
export class ExamplesModule {
}
