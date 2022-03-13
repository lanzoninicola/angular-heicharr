import { TestBed } from '@angular/core/testing';

import { UserAuthResolver } from './user-auth.resolver';

describe('UserAuthResolver', () => {
  let resolver: UserAuthResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserAuthResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
