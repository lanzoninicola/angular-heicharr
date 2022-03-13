import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserNewResolver implements Resolve<boolean> {
  constructor(private _userService: UserService) {}

  resolve(): Observable<boolean> {
    this._userService.stateEntityState$.next('create');

    return of(true);
  }
}
