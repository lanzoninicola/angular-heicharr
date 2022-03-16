import { TestBed } from '@angular/core/testing';

import { JobidStoreService } from './jobid-store.service';

describe('JobidStoreService', () => {
  let service: JobidStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobidStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
