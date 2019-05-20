import {NgModule} from '@angular/core';
import {ExamplesRoutingModule} from './examples-routing.module';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ITVDNChangeDetection01Component } from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import { ExampleTwoTestComponent } from './components/example-two-test/example-two-test.component';
import {CardComponent} from './components/itvdn-change-detection-01/card/card.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    SideMenuComponent,
    ITVDNChangeDetection01Component,
    CardComponent,
    ExampleTwoTestComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule {}
