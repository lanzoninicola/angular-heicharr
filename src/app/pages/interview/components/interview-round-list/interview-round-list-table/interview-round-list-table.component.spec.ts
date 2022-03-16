import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRoundListTableComponent } from './interview-round-list-table.component';

describe('InterviewRoundListTableComponent', () => {
  let component: InterviewRoundListTableComponent;
  let fixture: ComponentFixture<InterviewRoundListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewRoundListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewRoundListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
