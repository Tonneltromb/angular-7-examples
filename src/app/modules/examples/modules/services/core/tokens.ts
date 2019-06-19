import {InjectionToken} from '@angular/core';

export const HELLO_MESSAGE_TOKEN = new InjectionToken<string>('Hello message token', {
  providedIn: 'root',
  factory: () => 'Hello!'
});
