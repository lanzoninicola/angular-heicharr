import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, shareReplay } from 'rxjs';
import { DepartmentsCollection } from 'src/app/pages/settings/models/departments.collection';
import { PicklistModel } from 'src/app/pages/settings/models/picklist.model';
import { DepartmentService } from 'src/app/pages/settings/services/department/department.service';
import { PicklistService } from 'src/app/pages/settings/services/picklist/picklist.service';
import { PicklistType } from 'src/app/pages/settings/types/picklist-item.type';
import { UsersCollection } from '../../users/models/users.collection';
import { UserService } from '../../users/services/user.service';

import { JobIdModel } from '../models/jobid.model';
import { JobidCollection } from '../models/jobid.collection';
import { JobIdDTO } from '../types/jobid.dto.type';
import { JobIdFormData } from '../types/jobid.form.type';
import { JobBoardHttpService } from './job-board-http.service';
import { JobBoardSerializerService } from './job-board-serializer.service';
import { JobidStoreService } from './jobid-store.service';

@Injectable({
  providedIn: 'root',
})
export class JobidService {
  requiredPicklistTypes: PicklistType[] = [
    'business-unit',
    'role-level',
    'job-location-type',
    'employment-status',
    'jobid-working-status',
  ];

  constructor(
    private _httpService: JobBoardHttpService,
    private _picklistService: PicklistService,
    private _userService: UserService,
    private _departmentService: DepartmentService,
    private _serializationService: JobBoardSerializerService,

    private _store: JobidStoreService
  ) {}

  get store() {
    return this._store;
  }

  findAll(): Observable<JobidCollection> {
    const jobs$: Observable<JobIdDTO[]> = this._httpService.findAll();

    const users$: Observable<UsersCollection> = this._userService.findAll();

    const departments$: Observable<DepartmentsCollection> =
      this._departmentService.findAll();

    const picklist$: Observable<PicklistModel> = this.loadRequiredPicklist();

    return forkJoin([jobs$, users$, departments$, picklist$]).pipe(
      map(([jobs, users, departments, picklist]) => {
        const items = jobs.map((record) => {
          const user = users.findItemById(record.requestsId);
          const department = departments.findItemById(record.departmentsId);

          return this._serializationService.deserialize(record, {
            user,
            department,
            picklist,
          });
        });

        return new JobidCollection(items);
      }),
      shareReplay(1)
    );
  }

  findById(id: number): Observable<JobIdModel> {
    if (this._shouldCurrentCached(id)) {
      return of(this._currentCached());
    }

    const record$: Observable<JobIdDTO> = this._httpService.findById(id);

    const users$: Observable<UsersCollection> = this._userService.findAll();

    const departments$: Observable<DepartmentsCollection> =
      this._departmentService.findAll();

    const picklist$: Observable<PicklistModel> = this.loadRequiredPicklist();

    return forkJoin([record$, users$, departments$, picklist$]).pipe(
      map(([record, users, departments, picklist]) => {
        const user = users.findItemById(record.requestsId);
        const department = departments.findItemById(record.departmentsId);

        return this._serializationService.deserialize(record, {
          user,
          department,
          picklist,
        });
      }),
      shareReplay(1)
    );
  }

  save(model: JobIdModel) {
    const dto = this._serializationService.serialize(model);
    return this._httpService
      .save(dto)
      .subscribe(() => (this._store.currentJobId = model));
  }

  update(model: JobIdModel) {
    const dto = this._serializationService.serialize(model);
    return this._httpService
      .update(dto)
      .subscribe(() => (this._store.currentJobId = model));
  }

  loadRequiredPicklist(): Observable<PicklistModel> {
    const query = this._picklistQueryString();
    return this._picklistService.findByQuery(query);
  }

  getEntityModelFromFormData(formData: JobIdFormData): JobIdModel {
    const createdAt =
      this.store.entityState === 'update' ? formData.createdAt : new Date();
    const updatedAt = new Date();

    return new JobIdModel(
      formData.id,
      formData.requestToHire,
      formData.boardTemplate,
      formData.title,
      formData.department,
      formData.businessUnit,
      formData.requester,
      formData.jobRole,
      formData.roleLevel,
      formData.roleTaskDescription,
      formData.jobLocationType,
      formData.jobLocation,
      formData.employmentStatus,
      formData.minimumQualifications,
      formData.preferredQualifications,
      formData.benefits,
      formData.specialCategoriesOpened,
      formData.status,
      createdAt,
      updatedAt
    );
  }

  _currentCached(): JobIdModel {
    return this._store.currentJobId;
  }

  /**
   *
   */
  _shouldCurrentCached(entity?: JobIdModel | number): boolean {
    if (!this._currentCached()) {
      return false;
    }

    if (!(this._currentCached() instanceof JobIdModel)) {
      return false;
    }

    if (entity instanceof JobIdModel) {
      return entity.getId() === this._currentCached().getId();
    }

    if (Number.isInteger(entity)) {
      return entity === this._currentCached().getId();
    }

    return false;
  }

  /**
   * @description
   * Returns a string of the query parameters for the picklist service
   */
  private _picklistQueryString() {
    let fullUrlQuery = '';

    this.requiredPicklistTypes.forEach((picklistType) => {
      fullUrlQuery = fullUrlQuery + `&type=${picklistType}`;
    });

    return fullUrlQuery;
  }
}
