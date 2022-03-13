import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { UsersCollection } from '../models/users.collection';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserListResolver implements Resolve<Observable<UsersCollection>> {
  constructor(private _dataService: UserService) {}

  resolve(): Observable<UsersCollection> {
    return this._dataService.findAll();
  }
}
