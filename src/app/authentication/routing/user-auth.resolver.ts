import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of, switchMap, tap } from 'rxjs';
import { UserModel } from 'src/app/pages/users/models/user.model';
import { UserService } from 'src/app/pages/users/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthResolver implements Resolve<UserModel | null> {
  constructor(private _authz: AuthService, private _userService: UserService) {}

  resolve(): Observable<UserModel | null> {
    const { _authz, _userService } = this;

    return _authz.user$.pipe(
      switchMap((user) => {
        if (user && user.email) {
          return _userService.findByEmail(user.email);
        }
        return of(null);
      }),
      tap((user) => {
        _userService.stateUserAuthenticated$.next(user);
      })
    );
  }
}
