import { Component, Input, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'ahr-loading-spinner',
  template: `
    <div class="loading-spinner-overlay">
      <div class="loading-spinner-content">
        <div class="loading-spinner-wrapper">
          <mat-progress-spinner [mode]="mode" [diameter]="50">
          </mat-progress-spinner>
          <span class="loading-text">{{ loadingText }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  @Input()
  loadingText: string = 'Loading...';

  mode: ProgressSpinnerMode = 'indeterminate';

  constructor() {}

  ngOnInit(): void {}
}
