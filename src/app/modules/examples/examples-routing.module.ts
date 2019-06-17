import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ExamplesComponent} from './examples.component';
import TitledRoute from './core/interfaces/TitledRoute';
import {ITVDNChangeDetection01Component} from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import {ChangeDetectionComponent} from './components/change-detection/change-detection.component';

export const CHILDREN: TitledRoute[] = [
  {title: '', path: '',  redirectTo: 'itvdn-cd-01', pathMatch: 'full'},
  {title: 'ITVDN - Отслеживание изменений 01', path: 'itvdn-cd-01', component: ITVDNChangeDetection01Component},
  {title: 'ITVDN - Квадратики', path: 'itvdn-cd-boxes', loadChildren: './modules/boxes/boxes.module#BoxesModule'},
  {title: 'Change detection', path: 'change-detection', component: ChangeDetectionComponent}
];

const examplesRoutes: Routes = [
  {path: '', component: ExamplesComponent, children: CHILDREN}
];

@NgModule({
  imports: [RouterModule.forChild(examplesRoutes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
