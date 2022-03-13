import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EntityState } from 'src/app/core/types/entityState.type';
import { FormState } from 'src/app/dynamic-form/types/form-state.types';

import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserFormData } from '../../types/user-edit-form.types';

@Component({
  selector: 'ahr-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit, OnDestroy {
  currentUser: UserModel | null;
  entityState: EntityState = 'create';

  formState: FormState = 'idle';
  formData: UserFormData;
  formStatus: string = 'invalid';

  sub = new Subscription();

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._subscribeState();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onStateChanges(formState: FormState) {
    this.formState = formState;
  }

  onValueChanges(formData: UserFormData) {
    this.formData = formData;
  }

  onStatusChanges(formStatus: string) {
    this.formStatus = formStatus;
  }

  onSaveButtonClicked() {
    const userModel = this._userService.getEntityModelFromFormData(
      this.formData
    );

    if (this.entityState === 'create') {
      this._userService.save(userModel);
    }
    if (this.entityState === 'update') {
      this._userService.update(userModel);
    }
  }

  // TODO: Develop disable user
  onDisableButtonClicked() {}

  // TODO: Develop remove user
  onRemoveButtonClicked() {}

  private _subscribeState() {
    this.sub.add(
      this._userService.stateUserSelected$.subscribe((user) => {
        this.currentUser = user;
      })
    );

    this.sub.add(
      this._userService.stateEntityState$.subscribe((entityState) => {
        this.entityState = entityState;
      })
    );
  }
}

// TODO: check if a user with the same e-mail is already registered
