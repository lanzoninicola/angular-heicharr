import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CandidateIdBadgeComponent } from 'src/app/pages/job-board/components/candidate-id-badge/candidate-id-badge.component';
import { JobidBadgeComponent } from 'src/app/pages/job-board/components/jobid-badge/jobid-badge.component';
import { TableColumnConfig } from 'src/app/table-data/types/table.types';
import { InterviewRoundOnListTable } from '../../../types/interview.list.type';

@Component({
  selector: 'ahr-interview-round-list-table',
  template: `
    <ahr2-table-data
      [dataSource]="tableDataSource$"
      [columns]="columns"
      (onRowClicked)="onRowClicked($event)"
    >
    </ahr2-table-data>
  `,
})
export class InterviewRoundListTableComponent implements OnInit {
  @Input()
  tableDataSource$: Observable<InterviewRoundOnListTable[]>;

  columns = INTERVIEWS_TABLE_COLUMNS;

  constructor(private router: Router) {}

  ngOnInit() {}

  onRowClicked(entityRow: InterviewRoundOnListTable) {
    this.router.navigate(['interview', entityRow.interviewId]);
  }
}

const INTERVIEWS_TABLE_COLUMNS: TableColumnConfig[] = [
  {
    key: 'scheduledAt',
    title: 'Scheduled at',
    type: 'date',
    sortable: false,
    headerStyle: {
      'min-width': '80px',
      'padding-inline': '0.5rem',
      'word-break': 'break-all',
    },
  },
  {
    key: 'candidate',
    title: 'Candidate name',
    viewType: 'component',
    component: {
      key: CandidateIdBadgeComponent,
    },
    sortable: false,
    headerStyle: {
      'min-width': '80px',
    },
  },
  {
    key: 'jobId',
    title: 'Job ID',
    viewType: 'component',
    component: {
      key: JobidBadgeComponent,
    },
    sortable: false,
    headerStyle: {
      'min-width': '80px',
    },
  },
  {
    key: 'roundName',
    title: 'Round',
    sortable: false,
    headerStyle: {
      'min-width': '80px',
    },
  },
  {
    key: 'stage',
    title: 'Stage',
    objectProp: 'value',
    sortable: false,
    headerStyle: {
      'min-width': '80px',
    },
  },
];
