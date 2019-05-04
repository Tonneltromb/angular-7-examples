import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {TourOfHeroesComponent} from './tour-of-heroes.component';

const heroesRoutes: Routes = [
  {
    path: 'heroes', component: TourOfHeroesComponent, children: [
      {path: '', component: HeroesComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'detail/:id', component: HeroDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class TourOfHeroesRoutingModule {
}
