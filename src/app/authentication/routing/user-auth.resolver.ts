import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of, switchMap, tap } from 'rxjs';
import { UserModel } from 'src/app/pages/users/models/user.model';
import { UserService } from 'src/app/pages/users/services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthResolver implements Resolve<UserModel | null> {
  constructor(
    private _authz: AuthService,
    private _authenticationService: AuthenticationService,
    private _userService: UserService
  ) {}

  resolve(): Observable<UserModel | null> {
    console.log('son qua');

    const { _authz, _authenticationService, _userService } = this;

    return _authz.user$.pipe(
      switchMap((user) => {
        if (user && user.email) {
          return _userService.findByEmail(user.email);
        }
        return of(null);
      }),
      tap((user) => {
        _authenticationService.stateUserAuth$.next(user);
      })
    );
  }
}
