import {NgModule} from '@angular/core';
import {ExamplesRoutingModule} from './examples-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SideMenuComponent} from './core/components/side-menu/side-menu.component';
import {ITVDNChangeDetection01Component} from './components/itvdn-change-detection-01/itvdn-cd-01.component';
import {ChangeDetectionComponent} from './components/change-detection/change-detection.component';
import {CardComponent} from './components/itvdn-change-detection-01/card/card.component';
import {UserComponent} from './components/change-detection/user/user.component';
import {UserListComponent} from './components/change-detection/user-list/user-list.component';
import {UserStore} from './components/change-detection/store/user.store';
import {ExamplesComponent} from './examples.component';
import {ArrayFilterPipe} from './core/pipes/ArrayFilterPipe';
import {PipesComponent} from './components/pipes/pipes.component';
import {FormsComponent} from './components/forms/forms.component';
import {SvgArrowUpComponent} from '../../common/svg/svg.arrow-up.component';
import {RegexpComponent} from './components/regex/regexp.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    SideMenuComponent,
    ITVDNChangeDetection01Component,
    CardComponent,
    ChangeDetectionComponent,
    UserComponent,
    UserListComponent,
    PipesComponent,
    FormsComponent,
    ArrayFilterPipe,
    SvgArrowUpComponent,
    RegexpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExamplesRoutingModule,
  ],
  providers: [UserStore]
})
export class ExamplesModule {
}
