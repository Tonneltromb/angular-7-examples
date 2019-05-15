import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamplesComponent} from './examples.component';
import {ExamplesRoute} from './entities/Route';
import {ExampleOneTestComponent} from './components/example-one-test/example-one-test.component';
import {ExampleTwoTestComponent} from './components/example-two-test/example-two-test.component';

export const CHILDREN: ExamplesRoute[] = [
  {title: 'Example_1', path: 'example_1', component: ExampleOneTestComponent},
  {title: 'Example_2', path: 'example_2', component: ExampleTwoTestComponent}
];

const examplesRoutes: Routes = [
  {path: 'examples', component: ExamplesComponent, children: CHILDREN}
];

@NgModule({
  imports: [RouterModule.forChild(examplesRoutes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
