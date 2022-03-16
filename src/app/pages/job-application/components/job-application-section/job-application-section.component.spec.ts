import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationSectionComponent } from './job-application-section.component';

describe('JobApplicationSectionComponent', () => {
  let component: JobApplicationSectionComponent;
  let fixture: ComponentFixture<JobApplicationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
