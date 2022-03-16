import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRoundScheduleButtonComponent } from './interview-round-schedule-button.component';

describe('InterviewRoundScheduleButtonComponent', () => {
  let component: InterviewRoundScheduleButtonComponent;
  let fixture: ComponentFixture<InterviewRoundScheduleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewRoundScheduleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewRoundScheduleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
