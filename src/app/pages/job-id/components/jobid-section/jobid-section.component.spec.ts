import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobidSectionComponent } from './jobid-section.component';

describe('JobidSectionComponent', () => {
  let component: JobidSectionComponent;
  let fixture: ComponentFixture<JobidSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobidSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobidSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
