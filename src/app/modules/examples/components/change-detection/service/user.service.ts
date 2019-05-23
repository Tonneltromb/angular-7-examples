import {Injectable} from '@angular/core';
import {User} from '../core/User';
import {UserStore} from '../store/user.store';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    private userStore: UserStore) {
  }

  loadUsers() {
    this.http.get('').toPromise()
      .then()
      .catch();
  }
}
