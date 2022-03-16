import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ahr-jobid-section',
  template: `
    <div class="container-section">
      <app-section-toolbar [title]="'Jobs Id'">
        <ahr-search-control></ahr-search-control>
        <button mat-flat-button color="primary" (click)="postNewJob()">
          Post New Job
        </button>
      </app-section-toolbar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class JobidSectionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['job-id', 'list']);
  }

  postNewJob() {
    this.router.navigate(['job-id', 'new']);
  }
}
