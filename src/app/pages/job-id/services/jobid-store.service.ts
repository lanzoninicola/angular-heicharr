import { Injectable } from '@angular/core';
import { ModuleStoreService } from 'src/app/core/services/module-store.service';
import { EntityState } from 'src/app/core/types/entityState.type';
import { JobIdModel } from '../models/jobid.model';

@Injectable({
  providedIn: 'root',
})
export class JobidStoreService extends ModuleStoreService {
  readonly PREFIX: string = 'JB';

  set entities(entities: JobIdModel[]) {
    this.set(`${this.PREFIX}_LIST`, entities);
  }

  get entities(): JobIdModel[] {
    return this.get(`${this.PREFIX}_LIST`);
  }

  set currentJobId(currentEntity: JobIdModel) {
    this.set(`${this.PREFIX}_CURRENT_JOBID`, currentEntity);
  }

  get currentJobId(): JobIdModel {
    return this.get(`${this.PREFIX}_CURRENT_JOBID`);
  }

  currentJobIdReset() {
    this.reset(`${this.PREFIX}_CURRENT_JOBID`);
  }

  get entityState(): EntityState {
    return this.get(`${this.PREFIX}_ENTITY_STATE`);
  }

  entityStateUpdate() {
    this.set(`${this.PREFIX}_ENTITY_STATE`, 'update');
  }

  entityStateCreate() {
    this.set(`${this.PREFIX}_ENTITY_STATE`, 'create');
  }

  entityStateReset() {
    this.reset(`${this.PREFIX}_ENTITY_STATE`);
  }
}
