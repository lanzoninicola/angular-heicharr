import { TestBed } from '@angular/core/testing';

import { InterviewRoundResolver } from './interview-round.resolver';

describe('InterviewRoundResolver', () => {
  let resolver: InterviewRoundResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InterviewRoundResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
