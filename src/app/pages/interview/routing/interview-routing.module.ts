import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterviewEditComponent } from '../components/interview-edit/interview-edit.component';
import { InterviewRoundListComponent } from '../components/interview-round-list/interview-round-list.component';
import { InterviewSectionComponent } from '../components/interview-section/interview-section.component';
import { InterviewEditResolver } from './interview-edit.resolver';
import { InterviewFormResolver } from './interview-form.resolver';
import { InterviewRoundResolver } from './interview-round.resolver';

const routes: Routes = [
  {
    path: '',
    component: InterviewSectionComponent,
    children: [
      {
        path: 'list',
        component: InterviewRoundListComponent,
      },

      {
        path: ':id',
        component: InterviewEditComponent,
        resolve: {
          entity: InterviewEditResolver,
          formControlsData: InterviewFormResolver,
        },
      },
    ],
  },
  {
    path: 'round/:id',
    component: InterviewEditComponent,
    resolve: {
      entity: InterviewRoundResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewRoutingModule {}
