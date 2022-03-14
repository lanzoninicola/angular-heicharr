import { TestBed } from '@angular/core/testing';

import { AuthhrGuard } from './authhr.guard';

describe('AuthhrGuard', () => {
  let guard: AuthhrGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthhrGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
