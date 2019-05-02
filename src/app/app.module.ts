import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './modules/tour-of-heroes/components/heroes/heroes.component';
import { HeroDetailComponent } from './modules/tour-of-heroes/components/hero-detail/hero-detail.component';
import { MessagesComponent } from './modules/tour-of-heroes/components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './modules/tour-of-heroes/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
