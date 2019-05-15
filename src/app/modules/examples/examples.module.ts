import {NgModule} from '@angular/core';
import {ExamplesRoutingModule} from './examples-routing.module';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ExampleOneTestComponent } from './components/example-one-test/example-one-test.component';
import { ExampleTwoTestComponent } from './components/example-two-test/example-two-test.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    SideMenuComponent,
    ExampleOneTestComponent,
    ExampleTwoTestComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule {}
