import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ExamplesComponent} from './examples.component';
import {ITVDNChangeDetection01Component} from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import {ChangeDetectionComponent} from './components/change-detection/change-detection.component';
import {RouteGroupTag} from './core/RouteGroupTag';
import {PipesComponent} from './components/pipes/pipes.component';
import {FormsComponent} from './components/forms/forms.component';
import {RegexpComponent} from './components/regex/regexp.component';
import ExamplesRoute from './core/interfaces/ExamplesRoute';
import {RxjsComponent} from './components/rxjs/rxjs.component';
import {OtherComponent} from './components/other/other.component';
import {ItemsHolderComponent} from './components/components-communication/items-holder/items-holder.component';

export const CHILDREN: ExamplesRoute[] = [
  {
    title: '',
    tag: null,
    path: '',
    redirectTo: 'itvdn-cd-01',
    pathMatch: 'full'
  },
  {
    title: 'ITVDN - Отслеживание изменений 01',
    tag: RouteGroupTag.CHANGE_DETECTION,
    path: 'itvdn-cd-01',
    component: ITVDNChangeDetection01Component
  },
  {
    title: 'ITVDN - Квадратики',
    tag: RouteGroupTag.CHANGE_DETECTION,
    path: 'itvdn-cd-boxes',
    loadChildren: './modules/boxes/boxes.module#BoxesModule'
  },
  {
    title: 'Change detection',
    tag: RouteGroupTag.CHANGE_DETECTION,
    path: 'change-detection',
    component: ChangeDetectionComponent
  },
  {
    title: 'Services and DI',
    tag: RouteGroupTag.SERVICES_AND_DI,
    path: 'services',
    loadChildren: './modules/services/services.module#ServicesModule'
  },
  {
    title: 'Pipes',
    tag: RouteGroupTag.PIPES,
    path: 'pipes',
    component: PipesComponent
  },
  {
    title: 'Forms',
    tag: RouteGroupTag.FORMS,
    path: 'forms',
    component: FormsComponent
  },
  {
    title: 'Regexp',
    tag: RouteGroupTag.REGEXP,
    path: 'regexp',
    component: RegexpComponent
  },
  {
    title: 'RxJs - примеры',
    tag: RouteGroupTag.RXJS,
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    title: 'Разное',
    tag: RouteGroupTag.OTHER,
    path: 'other',
    component: OtherComponent
  },
  {
    title: 'Взаимодействие компонентов',
    tag: RouteGroupTag.OTHER,
    path: 'componentsCommunication',
    component: ItemsHolderComponent
  }
];

const examplesRoutes: Routes = [
  {path: '', component: ExamplesComponent, children: CHILDREN}
];

@NgModule({
  imports: [RouterModule.forChild(examplesRoutes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {
}
