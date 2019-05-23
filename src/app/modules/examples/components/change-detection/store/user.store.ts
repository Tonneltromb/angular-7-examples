import {Injectable} from '@angular/core';
import {User} from '../core/User';

@Injectable()
export class UserStore {
  users: Array<User>;
}
