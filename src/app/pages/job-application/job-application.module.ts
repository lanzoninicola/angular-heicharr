import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreModule } from 'src/app/core/core.module';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableDataModule } from 'src/app/table-data/table-data.module';

import { CandidatesModule } from '../candidates/candidates.module';
import { InterviewModule } from '../interview/interview.module';
import { JobApplicationActivityListComponent } from './components/job-application-activity-list/job-application-activity-list.component';
import { JobApplicationActivityEditComponent } from './components/job-application-edit/job-application-activity-edit/job-application-activity-edit.component';
import { JobApplicationActivityFormComponent } from './components/job-application-edit/job-application-activity-edit/job-application-activity-form/job-application-activity-form.component';
import { JobApplicationEditComponent } from './components/job-application-edit/job-application-edit.component';
import { JobApplicationJobidFormComponent } from './components/job-application-edit/job-application-jobid-form/job-application-jobid-form.component';
import { JobApplicationStatusFormComponent } from './components/job-application-edit/job-application-status-form/job-application-status-form.component';
import { JobApplicationListTableComponent } from './components/job-application-list-table/job-application-list-table.component';
import { JobApplicationListComponent } from './components/job-application-list/job-application-list.component';
import { JobApplicationSectionComponent } from './components/job-application-section/job-application-section.component';
import { JobApplicationRoutingModule } from './routing/job-application-routing.module';

@NgModule({
  declarations: [
    JobApplicationEditComponent,
    JobApplicationSectionComponent,
    JobApplicationActivityEditComponent,
    JobApplicationActivityFormComponent,
    JobApplicationActivityEditComponent,
    JobApplicationActivityListComponent,
    JobApplicationJobidFormComponent,
    JobApplicationStatusFormComponent,
    JobApplicationListComponent,
    JobApplicationListTableComponent,
    JobApplicationSectionComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    CoreModule,
    SharedModule,
    TableDataModule,
    DynamicFormModule,
    JobApplicationRoutingModule,
    CandidatesModule,
    InterviewModule,
  ],
  exports: [JobApplicationListTableComponent],
})
export class JobApplicationModule {}
