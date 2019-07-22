import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RoutingExamplesComponent} from './routing-examples.component';
import {BirdsListComponent} from './components/birds-list/birds-list.component';
import {BirdInfoComponent} from './components/bird-info/bird-info-component';
import {BirdFormComponent} from './components/bird-form/bird-form.component';
import {BirdResolver} from './core/BirdResolver';

const routes: Routes = [
  {
    path: '', component: RoutingExamplesComponent, children: [
      {path: 'birds', component: BirdsListComponent},
      {path: 'birds/add', component: BirdFormComponent},
      {
        path: 'birds/:birdId',
        component: BirdInfoComponent,
        resolve: {
          bird: BirdResolver
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingExamplesRoutingModule {
}
