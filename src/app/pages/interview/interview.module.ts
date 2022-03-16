import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreModule } from 'src/app/core/core.module';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableDataModule } from 'src/app/table-data/table-data.module';
import { CandidatesModule } from '../candidates/candidates.module';

import { InterviewEditComponent } from './components/interview-edit/interview-edit.component';
import { InterviewFeedbackEditFormComponent } from './components/interview-edit/interview-feedback-edit/interview-feedback-edit-form/interview-feedback-edit-form.component';
import { InterviewFeedbackEditComponent } from './components/interview-edit/interview-feedback-edit/interview-feedback-edit.component';
import { InterviewFeedbackListComponent } from './components/interview-edit/interview-feedback-list/interview-feedback-list.component';
import { InterviewQuestionItemComponent } from './components/interview-edit/interview-question-item/interview-question-item.component';
import { InterviewQuestionListComponent } from './components/interview-edit/interview-question-list/interview-question-list.component';
import { InterviewRoundDetailsComponent } from './components/interview-edit/interview-rounds/interview-round-details/interview-round-details.component';
import { InterviewRoundComponent } from './components/interview-edit/interview-rounds/interview-round/interview-round.component';
import { InterviewRoundsComponent } from './components/interview-edit/interview-rounds/interview-rounds.component';
import { InterviewStatusFormComponent } from './components/interview-edit/interview-status-form/interview-status-form.component';
import { InterviewRoundListTableComponent } from './components/interview-round-list/interview-round-list-table/interview-round-list-table.component';
import { InterviewRoundListComponent } from './components/interview-round-list/interview-round-list.component';
import { InterviewRoundScheduleButtonComponent } from './components/interview-round-schedule-button/interview-round-schedule-button.component';
import { InterviewRoundScheduleDialogComponent } from './components/interview-round-schedule-dialog/interview-round-schedule-dialog.component';
import { InterviewSectionComponent } from './components/interview-section/interview-section.component';
import { InterviewRoutingModule } from './routing/interview-routing.module';

@NgModule({
  declarations: [
    InterviewEditComponent,
    InterviewStatusFormComponent,
    InterviewRoundsComponent,
    InterviewRoundComponent,
    InterviewRoundDetailsComponent,
    InterviewFeedbackListComponent,
    InterviewFeedbackEditComponent,
    InterviewFeedbackEditFormComponent,
    InterviewQuestionListComponent,
    InterviewQuestionItemComponent,
    InterviewRoundScheduleDialogComponent,
    InterviewRoundScheduleButtonComponent,
    InterviewSectionComponent,
    InterviewRoundListComponent,
    InterviewRoundListTableComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    InterviewRoutingModule,
    CoreModule,
    SharedModule,
    DynamicFormModule,
    TableDataModule,
    CandidatesModule,
  ],
  exports: [InterviewRoundListComponent],
})
export class InterviewModule {}
