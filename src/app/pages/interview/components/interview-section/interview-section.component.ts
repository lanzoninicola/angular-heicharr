import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ahr-interview-section',
  template: `
    <div class="container-section">
      <app-section-toolbar [title]="'Interviews'">
        <ahr-search-control></ahr-search-control>
        <button
          mat-flat-button
          color="primary"
          (click)="scheduleInterviewRound()"
        >
          Schedule New Round
        </button>
      </app-section-toolbar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class InterviewSectionComponent implements OnInit {
  constructor(private router: Router) {}

  scheduleInterviewRound() {}

  ngOnInit(): void {
    this.router.navigate(['interview', 'list']);
  }
}
