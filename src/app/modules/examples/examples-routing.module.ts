import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamplesComponent} from './examples.component';

const examplesRoutes: Routes = [
  {path: 'examples', component: ExamplesComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forChild(examplesRoutes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
