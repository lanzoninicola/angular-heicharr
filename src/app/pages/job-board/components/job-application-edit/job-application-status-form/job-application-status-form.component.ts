import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { EntityState } from 'src/app/core/types/entityState.type';
import { DynamicFormService } from 'src/app/dynamic-form/services/dynamic-form.service';
import { FormModelBuilder } from 'src/app/dynamic-form/services/form-model-builder';
import { FormControlConfig } from 'src/app/dynamic-form/types/form-control.types';
import { FormState } from 'src/app/dynamic-form/types/form-state.types';
import { JobApplicationModel } from '../../../models/job-application.model';

@Component({
  selector: 'ahr-job-application-status-form',
  template: `
    <ahr-dynamic-form
      [model]="form.model"
      [settings]="form.settings"
      [showSpinner]="showSpinner"
    ></ahr-dynamic-form>
  `,
  providers: [DynamicFormService],
})
export class JobApplicationStatusFormComponent implements OnInit {
  @Input()
  currentApplication: JobApplicationModel;

  @Input()
  entityState: EntityState;

  @Input()
  showSpinner: boolean = false;

  sub = new Subscription();

  @Output('formStateChanges')
  formStateEvent: EventEmitter<FormState> = new EventEmitter<FormState>();

  @Output('valueChanges')
  valueChangesEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output('statusChanges')
  statusChangesEvent: EventEmitter<string> = new EventEmitter<string>();

  JA_MAIN_INFO: FormControlConfig[] = [];

  form: FormModelBuilder;

  constructor(
    private _route: ActivatedRoute,
    private _dynamicForm: DynamicFormService
  ) {}

  ngOnInit(): void {
    const { formState$, formData$, formStatus$ } = this._dynamicForm;

    this.form = new FormModelBuilder();
    this._setFormControlsConfig();
    this._setupForm();
    this._handleForms();

    if (this.entityState === 'update') {
      this._initFormValuesEntityUpdate();
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

  private _setFormControlsConfig() {
    this.JA_MAIN_INFO = [
      {
        type: 'input',
        placeholder: '',
        label: 'id',
        key: 'id',
        readonly: true,
        hidden: true,
      },
      {
        type: 'input',
        placeholder: '',
        label: 'candidate',
        key: 'candidate',
        readonly: true,
        hidden: true,
      },

      {
        type: 'input',
        placeholder: '',
        label: 'jobId',
        key: 'jobId',
        readonly: true,
        hidden: true,
      },
      {
        type: 'select',
        key: 'status',
        label: 'Application Status',
        placeholder: '',
        whatToSelect: 'Status',
        options: this._route.data.pipe(
          map((data) => data['formControlsData']['workingStatus'])
        ),
        syncValidators: [Validators.required],
        showOptionDescription: true,
      },
      {
        type: 'input',
        placeholder: '',
        label: 'Created At',
        key: 'createdAt',
        syncValidators: [],
        readonly: true,
        hidden: true,
      },
      {
        type: 'input',
        placeholder: '',
        label: 'Last Updated At',
        key: 'updatedAt',
        syncValidators: [],
        readonly: true,
        hidden: true,
      },
    ];
  }

  private _setupForm() {
    const { form } = this;

    form.setup(
      { key: 'jaMainInfo', title: 'Status of Application' },
      this.JA_MAIN_INFO
    );
  }

  private _handleForms() {
    this._dynamicForm.load(this.form);
  }

  private _initFormValuesEntityUpdate() {
    const { currentApplication } = this;

    this._dynamicForm.setControlsValue({
      id: currentApplication.id,
      status: currentApplication.status,
      candidate: currentApplication.candidate,
      jobId: currentApplication.jobId,
      createdAt: currentApplication.createdAt,
    });
  }
}
