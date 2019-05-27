import {NgModule} from '@angular/core';
import {ExamplesRoutingModule} from './examples-routing.module';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ITVDNChangeDetection01Component } from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import {CardComponent} from './components/itvdn-change-detection-01/card/card.component';
import {BoxComponent} from './components/itvdn-cd-boxes/box/box.component';
import { BoxContainerComponent } from './components/itvdn-cd-boxes/box-container/box-container.component';
import { UserComponent } from './components/change-detection/user/user.component';
import { UserListComponent } from './components/change-detection/user-list/user-list.component';
import {UserStore} from './components/change-detection/store/user.store';

@NgModule({
  declarations: [
    ExamplesComponent,
    SideMenuComponent,
    ITVDNChangeDetection01Component,
    CardComponent,
    BoxComponent,
    ChangeDetectionComponent,
    BoxContainerComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
  ],
  providers: [UserStore]
})
export class ExamplesModule {}
