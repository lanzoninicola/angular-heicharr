import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRoundScheduleDialogComponent } from './interview-round-schedule-dialog.component';

describe('InterviewRoundScheduleDialogComponent', () => {
  let component: InterviewRoundScheduleDialogComponent;
  let fixture: ComponentFixture<InterviewRoundScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewRoundScheduleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewRoundScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
