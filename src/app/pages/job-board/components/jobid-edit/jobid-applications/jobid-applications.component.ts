import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JobsApplicationsCollection } from '../../../models/job-application.collection';
import { JobApplicationModel } from '../../../models/job-application.model';
import { JobIdModel } from '../../../models/jobid.model';
import { JobApplicationsService } from '../../../services/job-applications.service';

@Component({
  selector: 'ahr-jobid-applications',
  template: `
    <ahr-job-application-list-table
      [tableDataSource$]="tableDataSource$"
    ></ahr-job-application-list-table>
  `,
})
export class JobidApplicationsComponent implements OnInit {
  @Input()
  jobId: JobIdModel;

  tableDataSource$: Observable<JobApplicationModel[]>;

  constructor(private _dataService: JobApplicationsService) {}

  ngOnInit(): void {
    this.tableDataSource$ = this._dataService.findByJobId(this.jobId).pipe(
      map<JobsApplicationsCollection, JobApplicationModel[]>((collection) => {
        return collection.getItems();
      })
    );
  }
}
