import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EntityState } from 'src/app/core/types/entityState.type';
import { DynamicFormService } from 'src/app/dynamic-form/services/dynamic-form.service';
import { FormModelBuilder } from 'src/app/dynamic-form/services/form-model-builder';
import { FormControlConfig } from 'src/app/dynamic-form/types/form-control.types';
import { FormState } from 'src/app/dynamic-form/types/form-state.types';

import { UserModel } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'ahr-user-edit-form',
  template: `
    <ahr-dynamic-form
      [model]="form.model"
      [settings]="form.settings"
      [showSpinner]="showSpinner"
    ></ahr-dynamic-form>
  `,
  styleUrls: ['./user-edit-form.component.scss'],
})
export class UserEditFormComponent implements OnInit {
  currentUser: UserModel | null;
  entityState: EntityState | null;

  @Input()
  showSpinner: boolean = false;

  sub = new Subscription();

  @Output('formStateChanges')
  formStateEvent: EventEmitter<FormState> = new EventEmitter<FormState>();

  @Output('valueChanges')
  valueChangesEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output('statusChanges')
  statusChangesEvent: EventEmitter<string> = new EventEmitter<string>();

  form: FormModelBuilder;

  constructor(
    private _dynamicForm: DynamicFormService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    const { formState$, formData$, formStatus$ } = this._dynamicForm;

    this._setupForm();

    this._subscribeState();

    if (this.entityState === 'create') {
      this._initFormValuesOnCreate();
    }

    if (this.entityState === 'update') {
      this._initFormValuesOnUpdate();
    }

    this.sub.add(
      formState$.subscribe((formState) => this.formStateEvent.emit(formState))
    );

    this.sub.add(
      formData$.subscribe((formData) => this.valueChangesEvent.emit(formData))
    );

    this.sub.add(
      formStatus$.subscribe((formStatus) =>
        this.statusChangesEvent.emit(formStatus)
      )
    );
  }

  ngOnDestroy() {
    this._dynamicForm.destroy();
    this.sub.unsubscribe();
  }

  _setupForm() {
    this.form = new FormModelBuilder();

    this.form.setup(
      { key: 'personalInfo', title: 'Personal Information' },
      PERSONAL_INFO_CONTROLS
    );

    this.form.setup(
      { key: 'companyRoleInfo', title: 'Company Role Information' },
      COMPANY_ROLE_INFO_CONTROLS
    );

    this.form.setup(
      { key: 'recruitingRole', title: 'Recruiting role' },
      RECRUITING_ROLE_CONTROLS
    );

    this._dynamicForm.load(this.form);
  }

  private _initFormValuesOnCreate() {
    this._dynamicForm.setControlsValue({
      id: Math.round(Math.random() * 100),
    });
  }

  private _initFormValuesOnUpdate() {
    const { currentUser } = this;

    if (currentUser) {
      this._dynamicForm.setControlsValue({
        id: currentUser.getId(),
        firstname: currentUser.getFirstname(),
        lastname: currentUser.getLastname(),
        email: currentUser.getEmail(),
        departments: currentUser.getDepartment(),
        businessUnit: currentUser.getBusinessUnit(),
        recruitingRoles: currentUser.getRecruitingRole(),
        isAdmin: currentUser.getIsAdmin(),
      });
    }
  }

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

// TODO: async validation to verify if the email already exists in the process of creating the userEditForm
// localhost:3000/users/?lastname=Graham
const PERSONAL_INFO_CONTROLS: FormControlConfig[] = [
  {
    type: 'input',
    placeholder: '',
    label: 'id',
    key: 'id',
    hidden: true,
    readonly: true,
  },
  {
    type: 'input',
    placeholder: '',
    label: 'Lastname',
    key: 'lastname',
    syncValidators: [Validators.required],
  },
  {
    type: 'input',
    placeholder: '',
    label: 'Firstname',
    key: 'firstname',
    syncValidators: [Validators.required],
  },
  {
    type: 'input',
    placeholder: '',
    label: 'E-mail',
    key: 'email',
    syncValidators: [Validators.required, Validators.email],
  },
];

const COMPANY_ROLE_INFO_CONTROLS: FormControlConfig[] = [
  {
    key: 'departments',
    type: 'select',
    label: 'Department',
    placeholder: '',
    whatToSelect: 'department',
  },
  {
    key: 'companyLevels',
    type: 'select',
    label: 'Level',
    placeholder: '',
    whatToSelect: 'level',
  },
];

const RECRUITING_ROLE_CONTROLS: FormControlConfig[] = [
  {
    key: 'recruitingRoles',
    type: 'select',
    label: 'Role',
    placeholder: '',
    whatToSelect: 'role',
  },
  {
    key: 'isAdmin',
    type: 'checkbox',
    label: 'Administrator',
  },
];
