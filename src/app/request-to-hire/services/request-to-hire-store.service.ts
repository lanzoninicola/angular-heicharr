import { Injectable } from '@angular/core';
import { ModuleStoreService } from 'src/app/core/services/module-store.service';
import { RequestToHireModel } from '../types/request-to-hire.type';

@Injectable({
  providedIn: 'root',
})
export class RequestToHireStoreService extends ModuleStoreService {
  entityStateUpdate() {
    this.set('requestToHire-entityState', 'update');
  }

  entityStateCreate() {
    this.set('requestToHire-entityState', 'create');
  }

  set currentEntity(currentRequest: RequestToHireModel) {
    this.set('requestToHire-currentRequest', currentRequest);
  }

  get currentEntity() {
    return this.get('requestToHire-currentRequest');
  }
}