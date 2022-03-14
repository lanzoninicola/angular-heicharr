import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthhrGuard implements CanActivate {
  constructor(private _authz: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const { _authz } = this;

    return _authz.isAuthenticated$.pipe(
      tap((loggedIn) => {
        console.log(loggedIn);
        if (!loggedIn) {
          this.loginWithRedirect();
        }
      })
    );
  }

  loginWithRedirect() {
    console.log('this.goLogin');
    this._router.navigate(['login']);
  }
}
