import {NgModule} from '@angular/core';
import {ExamplesRoutingModule} from './examples-routing.module';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ITVDNChangeDetection01Component } from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import { ExampleTwoTestComponent } from './components/example-two-test/example-two-test.component';
import {CardComponent} from './components/itvdn-change-detection-01/card/card.component';
import {BoxComponent} from './components/itvdn-cd-boxes/box/box.component';
import { BoxContainerComponent } from './components/itvdn-cd-boxes/box-container/box-container.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    SideMenuComponent,
    ITVDNChangeDetection01Component,
    CardComponent,
    BoxComponent,
    ExampleTwoTestComponent,
    BoxContainerComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule {}
