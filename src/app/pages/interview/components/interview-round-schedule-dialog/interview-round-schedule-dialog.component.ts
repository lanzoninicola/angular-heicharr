import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-interview-round-schedule-dialog',
  templateUrl: './interview-round-schedule-dialog.component.html',
  styleUrls: ['./interview-round-schedule-dialog.component.scss'],
})
export class InterviewRoundScheduleDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
