import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreModule } from 'src/app/core/core.module';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableDataModule } from 'src/app/table-data/table-data.module';

import { JobApplicationModule } from '../job-application/job-application.module';
import { JobidBadgeComponent } from './components/jobid-badge/jobid-badge.component';
import { JobidApplicationsComponent } from './components/jobid-edit/jobid-applications/jobid-applications.component';
import { JobidEditFormDetailsComponent } from './components/jobid-edit/jobid-edit-form-details/jobid-edit-form-details.component';
import { JobidEditFormMainComponent } from './components/jobid-edit/jobid-edit-form-main/jobid-edit-form-main.component';
import { JobidEditFormComponent } from './components/jobid-edit/jobid-edit-form/jobid-edit-form.component';
import { JobidEditComponent } from './components/jobid-edit/jobid-edit.component';
import { JobidListComponent } from './components/jobid-list/jobid-list.component';
import { JobidSectionComponent } from './components/jobid-section/jobid-section.component';
import { JobidStatusChipComponent } from './components/jobid-status-chip/jobid-status-chip.component';
import { JobIdRoutingModule } from './routing/job-id-routing.module';

@NgModule({
  declarations: [
    JobidSectionComponent,
    JobidListComponent,
    JobidStatusChipComponent,
    JobidEditComponent,
    JobidEditFormComponent,
    JobidApplicationsComponent,
    JobidEditFormMainComponent,
    JobidEditFormDetailsComponent,
    JobidBadgeComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    CoreModule,
    SharedModule,
    JobIdRoutingModule,
    DynamicFormModule,
    TableDataModule,
    JobApplicationModule,
  ],
})
export class JobIdModule {}
