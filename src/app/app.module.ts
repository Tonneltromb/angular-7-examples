import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MODULES} from './common/app.modules.holder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
