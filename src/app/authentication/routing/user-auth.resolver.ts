import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { filter, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { UserModel } from 'src/app/pages/users/models/user.model';
import { UserService } from 'src/app/pages/users/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthResolver implements Resolve<UserModel | null> {
  constructor(
    private _authz: AuthService,
    private _userService: UserService,
    private _router: Router
  ) {}

  resolve(): Observable<UserModel | null> {
    console.log('UserAuthResolver');
    const { _authz, _userService } = this;

    return _authz.user$.pipe(
      switchMap((userAuthz) => {
        if (userAuthz?.email) {
          return _userService.findByEmail(userAuthz.email);
        }
        return of(null);
      })
    );

    // return _authz.user$.pipe(
    //   switchMap((userAuthz) => {
    //     console.log('************ auth resolver', userAuthz);

    //     if (userAuthz && userAuthz.email) {
    //       console.log('************ auth resolver', 'inside if');
    //       return _userService.findByEmail(userAuthz.email);
    //     }
    //     return of(null);
    //   }),
    //   tap((user) => {
    //     console.log('************ auth resolver', user);
    //     _userService.stateAuthCurrentUser$.next(user);

    //     if (!user) {
    //       this.goLogin();
    //     }
    //   })
    // );
  }
}
