import {NgModule} from '@angular/core';
import {ExamplesRoutingModule} from './examples-routing.module';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';

@NgModule({
  declarations: [
    ExamplesComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule {}
