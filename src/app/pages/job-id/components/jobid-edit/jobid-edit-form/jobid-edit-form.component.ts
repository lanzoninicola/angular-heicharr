import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DynamicFormService } from 'src/app/dynamic-form/services/dynamic-form.service';
import { FormModelBuilder } from 'src/app/dynamic-form/services/form-model-builder';

import {
  FormControlConfig,
  SelectOptionConfig,
} from 'src/app/dynamic-form/types/form-control.types';
import { JobidService } from '../../../services/jobid.service';

@Component({
  selector: 'app-jobid-edit-form',
  template: `
    <ahr-dynamic-form
      [model]="mainForm.model"
      [settings]="mainForm.settings"
      [showSpinner]="showSpinner"
    ></ahr-dynamic-form>

    <mat-tab-group animationDuration="0ms">
      <mat-tab label="Details">
        <div class="tab-content-wrapper">
          <ahr-dynamic-form
            [model]="detailsForm.model"
            [settings]="detailsForm.settings"
            [showSpinner]="showSpinner"
          ></ahr-dynamic-form>
        </div>
      </mat-tab>
      <mat-tab label="Applications">Applications</mat-tab>
      <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>
  `,
  styleUrls: ['./jobid-edit-form.component.scss'],
})
export class JobidEditFormComponent implements OnInit {
  @Input()
  showSpinner: boolean = false;

  @Output('valueChanges')
  valueChangesEvent: EventEmitter<Observable<any>> = new EventEmitter<
    Observable<any>
  >();

  @Output('statusChanges')
  statusChangesEvent: EventEmitter<Observable<any>> = new EventEmitter<
    Observable<any>
  >();

  RTH_RELATIONS_INFO: FormControlConfig[] = [];
  RTH_MAIN_INFO: FormControlConfig[] = [];
  RTH_POSITION_MAIN: FormControlConfig[] = [];
  RTH_POSITION_DETAILS: FormControlConfig[] = [];

  mainForm: FormModelBuilder;
  detailsForm: FormModelBuilder;

  constructor(
    private _route: ActivatedRoute,
    private _dynamicForm: DynamicFormService,
    private _dataService: JobidService
  ) {}

  ngOnInit(): void {
    this.mainForm = new FormModelBuilder();
    this.detailsForm = new FormModelBuilder();
    this._setFormControlsConfig();
    this._setupForm();
    this._handleForms();

    if (this._dataService.store.entityState === 'create') {
      this._initFormValuesEntityCreate();
    }

    if (this._dataService.store.entityState === 'update') {
      this._initFormValuesEntityUpdate();
    }

    this.valueChangesEvent.emit(this._dynamicForm.formData$);
    this.statusChangesEvent.emit(this._dynamicForm.formStatus$);
  }

  ngOnDestroy() {
    this._dynamicForm.destroy();
  }

  private _setFormControlsConfig() {
    this.RTH_RELATIONS_INFO = [];

    this.RTH_MAIN_INFO = [
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
        label: 'Title',
        key: 'title',
        syncValidators: [Validators.required],
      },
      {
        type: 'input',
        placeholder: '',
        label: 'Created At',
        key: 'createdAt',
        syncValidators: [],
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
      {
        key: 'status',
        type: 'select',
        label: 'Working Status',
        placeholder: '',
        whatToSelect: 'status',
        options: this._route.data.pipe(
          map((data) => data['formControlsData']['picklist']['workingStatus'])
        ),
      },
    ];

    this.RTH_POSITION_MAIN = [
      {
        type: 'select',
        key: 'jobRole',
        label: 'Job Role',
        placeholder: '',
        whatToSelect: 'Job Role',
        syncValidators: [Validators.required],
        options: this._route.data.pipe(
          map((data) => data['formControlsData']['jobRoles'])
        ),
      },
      {
        type: 'select',
        key: 'roleLevel',
        label: 'Role Level',
        placeholder: '',
        whatToSelect: 'Role Level',
        options: this._route.data.pipe(
          map((data) => data['formControlsData']['picklist']['roleLevel'])
        ),
        syncValidators: [Validators.required],
      },
      {
        type: 'select',
        key: 'employmentStatus',
        label: 'Employment Status',
        placeholder: '',
        whatToSelect: 'Employment Status',
        options: this._route.data.pipe(
          map(
            (data) => data['formControlsData']['picklist']['employmentStatus']
          )
        ),
        syncValidators: [Validators.required],
      },
      {
        type: 'select',
        key: 'jobLocationType',
        label: 'Location Type',
        placeholder: '',
        whatToSelect: 'Location Type',
        options: this._route.data.pipe(
          map((data) => data['formControlsData']['picklist']['jobLocationType'])
        ),
        syncValidators: [Validators.required],
      },

      {
        key: 'jobLocation',
        type: 'select',
        label: 'Branch Office',
        placeholder: '',
        whatToSelect: 'branches',
        options: this._route.data.pipe(
          map((data) => data['formControlsData']['branches'])
        ),
        syncValidators: [Validators.required],
      },
      {
        key: 'specialCategoriesOpened',
        type: 'checkbox',
        label: 'Open for Special Categories',
      },
    ];

    this.RTH_POSITION_DETAILS = [
      {
        type: 'textarea',
        placeholder: '',
        label: 'Tasks Description',
        key: 'roleTaskDescription',
        syncValidators: [Validators.required],
        style: {
          minHeight: '300px',
          lineHeight: '1.5',
        },
      },
      {
        type: 'textarea',
        placeholder: '',
        label: 'Minimum Qualifications',
        key: 'minimumQualifications',
        syncValidators: [Validators.required],
        style: {
          minHeight: '300px',
          lineHeight: '1.5',
        },
      },
      {
        type: 'textarea',
        placeholder: '',
        label: 'Preferred Qualifications',
        key: 'preferredQualifications',
        syncValidators: [Validators.required],
        style: {
          minHeight: '300px',
          lineHeight: '1.5',
        },
      },
      {
        type: 'textarea',
        placeholder: '',
        label: 'Benefits',
        key: 'benefits',
        syncValidators: [Validators.required],
        style: {
          minHeight: '300px',
          lineHeight: '1.5',
        },
      },
    ];
  }

  private _setupForm() {
    const { mainForm, detailsForm } = this;

    mainForm.setup(
      { key: 'jbMainInfo', title: 'Main Information' },
      this.RTH_MAIN_INFO
    );

    mainForm.setup(
      { key: 'jbPositionMainInfo', title: 'Position Information' },
      this.RTH_POSITION_MAIN
    );

    detailsForm.setup(
      { key: 'jbPositionDetails', title: 'Position Details' },
      this.RTH_POSITION_DETAILS
    );
  }

  private _handleForms() {
    const { mainForm, detailsForm } = this;

    // this._dynamicForm.mergeAll([{ main: mainForm }, { details: detailsForm }]);
  }

  private _initFormValuesEntityUpdate() {
    const { currentJobId } = this._dataService.store;

    this._dynamicForm.setControlsValue({
      id: currentJobId.getId(),
      title: currentJobId.getTitle(),
      createdAt: currentJobId.getCreatedAt(),
      updatedAt: currentJobId.getUpdatedAt(),
      status: currentJobId.getStatus(),
      jobRole: currentJobId.getJobRole(),
      roleLevel: currentJobId.getRoleLevel(),
      employmentStatus: currentJobId.getEmploymentStatus(),
      jobLocationType: currentJobId.getJobLocationType(),
      jobLocation: currentJobId.getJobLocation(),
      specialCategoriesOpened: currentJobId.getSpecialCategoriesOpened(),
      roleTaskDescription: currentJobId.getRoleTaskDescription(),
      minimumQualifications: currentJobId.getMinimumQualifications(),
      preferredQualifications: currentJobId.getPreferredQualifications(),
      benefits: currentJobId.getBenefits(),
    });
  }

  private _initFormValuesEntityCreate() {
    this._initWorkingStatusFormControl();
  }

  private _initWorkingStatusFormControl() {
    this._route.data
      .pipe(
        map<Data, SelectOptionConfig>((data) => {
          const [newWorkingStatus] = data['formControlsData']['picklist'][
            'workingStatus'
          ].filter(
            (item: SelectOptionConfig) =>
              item.textContext.toLowerCase() === 'new'
          );
          return newWorkingStatus;
        })
      )
      .subscribe((data) => {
        const { value: picklistWorkingStatusNew } = data;

        this._dynamicForm.setControlsValue({
          status: picklistWorkingStatusNew,
        });
      });
  }
}
