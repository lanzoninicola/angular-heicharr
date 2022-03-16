import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobApplicationEditComponent } from '../components/job-application-edit/job-application-edit.component';
import { JobApplicationListComponent } from '../components/job-application-list/job-application-list.component';
import { JobBoardSectionComponent } from '../components/job-board-section/job-board-section.component';
import { JobidEditComponent } from '../components/jobid-edit/jobid-edit.component';
import { JobidListComponent } from '../components/jobid-list/jobid-list.component';
import { JobApplicationEditResolver } from './job-application-edit.resolver';
import { JobApplicationFormResolver } from './job-application-form.resolver';
import { JobidEditResolver } from './jobid-edit.resolver';
import { JobidFormResolver } from './jobid-form.resolver';
import { JobidNewResolver } from './jobid-new.resolver';

const moduleRoutes: Routes = [
  {
    path: '',
    component: JobBoardSectionComponent,
    children: [
      {
        path: 'jobid/list',
        component: JobidListComponent,
      },
      {
        path: 'jobid/new',
        component: JobidEditComponent,
        resolve: {
          newEntity: JobidNewResolver,
          formControlsData: JobidFormResolver,
        },
      },
      {
        path: 'jobid/:id',
        component: JobidEditComponent,
        resolve: {
          entity: JobidEditResolver,
          formControlsData: JobidFormResolver,
        },
      },
      {
        path: 'applications/list',
        component: JobApplicationListComponent,
      },
      // {
      //   path: 'jobid/new',
      //   component: JobidEditComponent,
      //   resolve: {
      //     newEntity: JobidNewResolver,
      //     formControlsData: JobidFormResolver,
      //   },
      // },
      {
        path: 'applications/:id',
        component: JobApplicationEditComponent,
        resolve: {
          entity: JobApplicationEditResolver,
          formControlsData: JobApplicationFormResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule],
})
export class JobBoardRoutingModule {}
