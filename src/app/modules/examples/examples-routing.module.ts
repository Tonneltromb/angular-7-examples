import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamplesComponent} from './examples.component';
import {ExamplesRoute} from './entities/Route';
import {ITVDNChangeDetection01Component} from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import {ExampleTwoTestComponent} from './components/example-two-test/example-two-test.component';

export const CHILDREN: ExamplesRoute[] = [
  {title: 'ITVDN - Отслеживание изменений 01', path: 'itvdn-cd-01', component: ITVDNChangeDetection01Component},
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
