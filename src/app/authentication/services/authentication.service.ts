import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/pages/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  stateUserAuth$ = new BehaviorSubject<UserModel | null>(null);

  constructor() {}
}
