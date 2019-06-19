import {Component, Inject} from '@angular/core';
import {BookService} from './services/BookService';
import {HELLO_MESSAGE_TOKEN} from './core/tokens';

@Component({
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  constructor(
    @Inject('BookServiceFromFactory') public booksService: BookService,
    @Inject('TEST_INJECTED_VALUE') public testInjectedValue: number,
    @Inject(HELLO_MESSAGE_TOKEN) public helloMessage: string) {}
}
