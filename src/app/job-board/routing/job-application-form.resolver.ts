import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map, Observable } from 'rxjs';

import { JobApplicationWorkingStatusService } from '../services/ja-working-status.service';
import { JobApplicationFormControlsData } from '../types/job-application.form.type';

@Injectable({
  providedIn: 'root',
})
export class JobApplicationFormResolver
  implements Resolve<JobApplicationFormControlsData>
{
  constructor(
    private _jaWorkingStatusService: JobApplicationWorkingStatusService
  ) {}

  resolve(): Observable<JobApplicationFormControlsData> {
    const workingStatusCollection = this._jaWorkingStatusService.findAll();

    return workingStatusCollection.pipe(
      map((workingStatusCollection) => {
        const workingStatusItem = workingStatusCollection.getItems();

        return workingStatusItem.map((item) => {
          return {
            value: item,
            textContext: item.status.getValue(),
            definition: item.getDescription(),
          };
        });
      }),
      map((formControlContent) => {
        return {
          workingStatus: formControlContent,
        };
      })
    );
  }
}
