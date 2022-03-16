import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobidEditComponent } from '../components/jobid-edit/jobid-edit.component';

import { JobidListComponent } from '../components/jobid-list/jobid-list.component';
import { JobidSectionComponent } from '../components/jobid-section/jobid-section.component';
import { JobidEditResolver } from './jobid-edit.resolver';
import { JobidFormResolver } from './jobid-form.resolver';
import { JobidNewResolver } from './jobid-new.resolver';

const routes: Routes = [
  {
    path: '',
    component: JobidSectionComponent,
    children: [
      {
        path: 'list',
        component: JobidListComponent,
      },
      {
        path: 'new',
        component: JobidEditComponent,
        resolve: {
          newEntity: JobidNewResolver,
          formControlsData: JobidFormResolver,
        },
      },
      {
        path: ':id',
        component: JobidEditComponent,
        resolve: {
          entity: JobidEditResolver,
          formControlsData: JobidFormResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobIdRoutingModule {}
