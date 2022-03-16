import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSectionComponent } from './interview-section.component';

describe('InterviewSectionComponent', () => {
  let component: InterviewSectionComponent;
  let fixture: ComponentFixture<InterviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
