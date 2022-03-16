import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationEditComponent } from '../components/job-application-edit/job-application-edit.component';

import { JobApplicationListComponent } from '../components/job-application-list/job-application-list.component';
import { JobApplicationSectionComponent } from '../components/job-application-section/job-application-section.component';
import { JobApplicationEditResolver } from './job-application-edit.resolver';
import { JobApplicationFormResolver } from './job-application-form.resolver';

const routes: Routes = [
  {
    path: '',
    component: JobApplicationSectionComponent,
    children: [
      {
        path: 'list',
        component: JobApplicationListComponent,
      },
      {
        path: ':id',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobApplicationRoutingModule {}
