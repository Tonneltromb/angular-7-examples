import {NgModule} from '@angular/core';

import {BoxComponent} from './components/box/box.component';
import {BoxContainerComponent} from './components/box-container/box-container.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const BOXES_ROUTES: Routes = [
  {path: '', component: BoxContainerComponent}
];

@NgModule({
  declarations: [BoxComponent, BoxContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BOXES_ROUTES)
  ]
})
export class BoxesModule {
}
