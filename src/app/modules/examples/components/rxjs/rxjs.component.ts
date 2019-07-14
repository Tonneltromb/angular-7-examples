import {Component} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent {

  callMe() {
    const foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100);
      subscriber.next(200);
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
      }, 1000);
    });

    console.log('before');
    const subscription = foo.subscribe(
      x => {
        console.log(x);
      },
      e => {
      },
      () => console.log('done')
    );
    // setTimeout(() => subscription.unsubscribe(), 1500);
    console.log('after');
  }
  startInterval() {
    const observable = new Observable(function subscribe(subscriber) {
      // Keep track of the interval resource
      const intervalId = setInterval(() => {
        subscriber.next('hi');
      }, 1000);

      // Provide a way of canceling and disposing the interval resource
      return function unsubscribe() {
        clearInterval(intervalId);
      };
    });
    const subscription = observable.subscribe(value => console.log(value));
    setTimeout(() => subscription.unsubscribe(), 4000);
  }
  mapExample() {
    const foo = new Observable<number>(subscriber => {
      subscriber.next(40);
      subscriber.next(100);
      subscriber.next(200);
    });
    map((x: number) => x * 2)(foo).subscribe(x => console.log(x));
  }
  pipeExample() {
    const observable = from([10, 20, 30, 40, 50])
      .pipe(
        map(x => x * 2),
        filter(x => x > 50)
      );
    observable.subscribe(x => console.log(x));
  }
}
