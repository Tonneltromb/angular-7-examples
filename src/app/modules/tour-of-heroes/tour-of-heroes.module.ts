import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {TourOfHeroesComponent} from './tour-of-heroes.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {MessagesComponent} from './components/messages/messages.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TourOfHeroesRoutingModule} from './tour-of-heroes-routing.module';

@NgModule({
  declarations: [
    TourOfHeroesComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TourOfHeroesRoutingModule
  ],
})
export class TourOfHeroesModule {
}
