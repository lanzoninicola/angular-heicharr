import { Component, OnInit } from '@angular/core';
import { InterviewRoundService } from '../../services/interview-round.service';
import { InterviewService } from '../../services/interview.service';
import { JobApplicationsService } from '../../../job-board/services/job-applications.service';

@Component({
  selector: 'ahr-interview-round-schedule-button',
  template: `
    <ahr-edit-action-button
      left
      [label]="'Schedule Interview'"
      [icon]="'work'"
      (actionEvent)="onScheduleInterview()"
    ></ahr-edit-action-button>
  `,
  styleUrls: ['./interview-round-schedule-button.component.scss'],
})
export class InterviewRoundScheduleButtonComponent implements OnInit {
  constructor(
    private _jobApplication: JobApplicationsService,
    private _interview: InterviewService,
    private _interviewRound: InterviewRoundService
  ) {}

  ngOnInit(): void {}

  onScheduleInterview() {}
}
