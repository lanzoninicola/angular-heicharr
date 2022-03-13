import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, EMPTY, Observable, tap } from 'rxjs';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserEditResolver implements Resolve<UserModel> {
  constructor(
    private _userService: UserService,
    private _dataService: UserService,
    private _location: Location
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserModel> {
    const entityIdParam = parseInt(route.params['id'], 10);

    if (Number.isNaN(+entityIdParam)) {
      this._goBack();
    }

    return this._dataService.findById(entityIdParam).pipe(
      catchError(this._goBack()),
      tap((entity) => {
        this._userService.stateUserSelected$.next(entity);
        this._userService.stateEntityState$.next('update');
      })
    );
  }

  private _goBack() {
    return () => {
      this._location.back();
      return EMPTY;
    };
  }
}

// TODO: Check the behavior: here we returns an Observable but in the component is returned plain data
