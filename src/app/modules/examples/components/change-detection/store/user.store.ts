import {Injectable} from '@angular/core';
import {User} from '../core/User';

@Injectable()
export class UserStore {
  users: Array<User> = [
    {name: 'Ivan', version: 0, age: 24, email: 'www@www.ru'},
    {name: 'George', version: 0, age: 26, email: 'www@www.ru'},
    {name: 'Helen', version: 0, age: 20, email: 'www@www.ru'}
  ];

  changeVersion(user: User) {
    user.version = user.version + 1;
  }

  changeUser(index, user: User) {
    this.users[index] = {
      name: 'new ' + user.name,
      version: user.version,
      age: user.age * 2,
      email: 'new ' + user.email
    };
  }
}
