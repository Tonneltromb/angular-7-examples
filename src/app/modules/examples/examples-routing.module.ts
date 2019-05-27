import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamplesComponent} from './examples.component';
import {ExamplesRoute} from './entities/Route';
import {ITVDNChangeDetection01Component} from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import {ChangeDetectionComponent} from './components/change-detection/change-detection.component';
import {BoxContainerComponent} from './components/itvdn-cd-boxes/box-container/box-container.component';

export const CHILDREN: ExamplesRoute[] = [
  {title: 'ITVDN - Отслеживание изменений 01', path: 'itvdn-cd-01', component: ITVDNChangeDetection01Component},
  {title: 'ITVDN - Квадратики', path: 'itvdn-cd-boxes', component: BoxContainerComponent},
  {title: 'Change detection', path: 'change-detection', component: ChangeDetectionComponent}
];

const examplesRoutes: Routes = [
  {path: 'examples', component: ExamplesComponent, children: CHILDREN}
];

@NgModule({
  imports: [RouterModule.forChild(examplesRoutes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
