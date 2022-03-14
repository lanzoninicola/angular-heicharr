import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  forkJoin,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
} from 'rxjs';
import { EntityState } from 'src/app/core/types/entityState.type';

import { DepartmentService } from '../../settings/services/department/department.service';
import { PicklistService } from '../../settings/services/picklist/picklist.service';
import { UserModel } from '../models/user.model';
import { UsersCollection } from '../models/users.collection';
import { UserFormData } from '../types/user-edit-form.types';
import { UserHttpService } from './user-http.service';
import { UserSerializerService } from './user-serializer.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  stateUserSelected$ = new BehaviorSubject<UserModel | null>(null);
  stateEntityState$ = new BehaviorSubject<EntityState>('idle');
  stateAuthCurrentUser$ = new BehaviorSubject<UserModel | null>(null);
  stateAuthCurrentUserEmail$ = new BehaviorSubject<string | null>(null);

  constructor(
    private _http: UserHttpService,
    private _picklistService: PicklistService,
    private _departmentService: DepartmentService,
    private _serializerService: UserSerializerService
  ) {}

  findAll(): Observable<UsersCollection> {
    const users$ = this._http.findAll();
    const roles$ = this._picklistService.findByType('recruitingRoles');
    const departments$ = this._departmentService.findAll();
    const businessUnits$ = this._picklistService.findByType('businessUnits');

    return forkJoin([users$, roles$, departments$, businessUnits$]).pipe(
      map(([users, roles, departments, businessUnits]) => {
        const usersCollection = users.map((user) => {
          const recruitingRole = roles.findItemById(user.recruitingRole);

          const department = departments.findItemById(user.department);

          const businessUnit =
            user.businessUnit !== null
              ? businessUnits.findItemById(user.businessUnit)
              : null;

          return this._serializerService.deserialize(user, {
            recruitingRole,
            department,
            businessUnit,
          });
        });

        return new UsersCollection(usersCollection);
      }),
      shareReplay(1)
    );
  }

  findById(id: number): Observable<UserModel> {
    const user$ = this._http.findById(id);
    const roles$ = this._picklistService.findByType('recruitingRoles');
    const departments$ = this._departmentService.findAll();
    const businessUnits$ = this._picklistService.findByType('businessUnits');

    return forkJoin([user$, roles$, departments$, businessUnits$]).pipe(
      map(([user, roles, departments, businessUnits]) => {
        const recruitingRole = roles.findItemById(user.recruitingRole);

        const department = departments.findItemById(user.department);

        const businessUnit =
          user.businessUnit !== null
            ? businessUnits.findItemById(user.businessUnit)
            : null;

        return this._serializerService.deserialize(user, {
          recruitingRole,
          department,
          businessUnit,
        });
      }),
      shareReplay(1)
    );
  }

  findByEmail(email: string): Observable<UserModel | null> {
    return this._http.findByParam('email', email).pipe(
      map((users) => {
        return users[0];
      }),
      switchMap((user) => {
        if (user === undefined) {
          return of(null);
        }

        return this.findById(user.id);
      })
    );
  }

  save(userData: UserModel) {
    const userDTO = this._serializerService.serialize(userData);
    return this._http.save(userDTO);
  }

  update(userData: UserModel) {
    const userDTO = this._serializerService.serialize(userData);
    return this._http.update(userDTO);
  }

  getEntityModelFromFormData(formData: UserFormData): UserModel {
    return new UserModel(
      formData.id,
      formData.firstname,
      formData.lastname,
      formData.email,
      formData.recruitingRoles,
      formData.departments,
      formData.businessUnit,
      formData.isAdmin
    );
  }
}

// TODO: UserService see below

/*

See this article for caching
https://indepth.dev/posts/1450/how-to-use-ts-decorators-to-add-caching-logic-to-api-calls

The getAll() method cache the result in the UserStore

The findById check in the store the user

Add button in the top bar of section, when pressed update the userStore with the new list that fired a new getAll() UserModel

Automate the update of the userStore :
First solution: after xxx second or minutes (in the global settings the user can decide holding the button that show the options), 

Force after xxx minutes of inactivity (need to track the activity)

*/
