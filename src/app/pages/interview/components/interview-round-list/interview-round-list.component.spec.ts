import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRoundListComponent } from './interview-round-list.component';

describe('InterviewRoundListComponent', () => {
  let component: InterviewRoundListComponent;
  let fixture: ComponentFixture<InterviewRoundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewRoundListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewRoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
