import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoutingExamplesComponent} from './routing-examples.component';
import {RoutingExamplesRoutingModule} from './routing-examples-routing.module';
import {BirdsListComponent} from './components/birds-list/birds-list.component';
import {BirdInfoComponent} from './components/bird-info/bird-info-component';
import {BirdFormComponent} from './components/bird-form/bird-form.component';
import {BirdsStore} from './stores/birds.store';
import {BirdResolver} from './core/BirdResolver';

@NgModule({
  declarations: [
    RoutingExamplesComponent,
    BirdsListComponent,
    BirdInfoComponent,
    BirdFormComponent
  ],
  imports: [
    CommonModule,
    RoutingExamplesRoutingModule
  ],
  providers: [
    BirdsStore,
    BirdResolver
  ]
})
export class RoutingExamplesModule {}
