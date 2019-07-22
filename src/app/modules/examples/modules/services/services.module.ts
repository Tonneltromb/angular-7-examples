import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ServicesComponent} from './services.component';
import {BookService} from './services/BookService';
import {BookShopService} from './services/BookShopService';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ServicesComponent}
    ]),
  ],
  providers: [
    {provide: 'TEST_INJECTED_VALUE', useValue: 123},
    {provide: BookService, useClass: BookService},
    {provide: 'BookService', useClass: BookService},
    {
      provide: 'BookServiceFromFactory',
      useFactory: () => new BookService()
    },
    {
      provide: BookShopService,
      useFactory: (bookService) => new BookShopService(bookService),
      deps: [BookService]
    },
  ]
})
export class ServicesModule {}
