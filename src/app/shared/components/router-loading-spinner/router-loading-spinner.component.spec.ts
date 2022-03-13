import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLoadingSpinnerComponent } from './router-loading-spinner.component';

describe('RouterLoadingSpinnerComponent', () => {
  let component: RouterLoadingSpinnerComponent;
  let fixture: ComponentFixture<RouterLoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLoadingSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
