import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { JobidStoreService } from '../services/jobid-store.service';

@Injectable({
  providedIn: 'root',
})
export class JobidNewResolver implements Resolve<boolean> {
  constructor(private _store: JobidStoreService) {}

  resolve(): Observable<boolean> {
    this._store.entityStateCreate();

    return of(true);
  }
}
