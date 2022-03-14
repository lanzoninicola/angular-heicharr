import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from 'src/app/pages/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  stateUserAuth$ = new BehaviorSubject<UserModel | null>(null);

  get authUser$(): Observable<User | null | undefined> {
    return this._authz.user$;
  }

  get isAuthenticated$(): Observable<boolean> {
    return this._authz.isAuthenticated$;
  }

  constructor(private _authz: AuthService) {}
}
