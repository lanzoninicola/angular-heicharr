import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ahr-job-application-section',
  template: `
    <div class="container-section">
      <app-section-toolbar [title]="'Job Applications'">
        <ahr-search-control></ahr-search-control>
      </app-section-toolbar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class JobApplicationSectionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['job-application', 'list']);
  }
}
