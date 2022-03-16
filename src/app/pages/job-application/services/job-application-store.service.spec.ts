import { TestBed } from '@angular/core/testing';

import { JobApplicationStoreService } from './job-application-store.service';

describe('JobApplicationStoreService', () => {
  let service: JobApplicationStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplicationStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
