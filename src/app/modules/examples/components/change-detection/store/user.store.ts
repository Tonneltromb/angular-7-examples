import {Injectable} from '@angular/core';
import {User} from '../core/User';

@Injectable()
export class UserStore {
  users: Array<User> = [
    {name: 'Ivan', age: 24, email: 'www@www.ru'},
    {name: 'George', age: 26, email: 'www@www.ru'},
    {name: 'Helen', age: 20, email: 'www@www.ru'}
  ];

  changeName(user: User) {
    user.name = user.name + 1;
  }

  changeUser(index, user: User) {
    this.users[index] = {
      name: 'new ' + user.name,
      age: user.age * 2,
      email: 'new ' + user.email
    };
  }
}
