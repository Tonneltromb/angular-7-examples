import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ExamplesComponent} from './examples.component';
import {CHILDREN} from './core/child-routes';

const examplesRoutes: Routes = [
  {path: '', component: ExamplesComponent, children: CHILDREN}
];

@NgModule({
  imports: [RouterModule.forChild(examplesRoutes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
