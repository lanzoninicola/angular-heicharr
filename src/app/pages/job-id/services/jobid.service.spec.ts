import { TestBed } from '@angular/core/testing';

import { JobidService } from './jobid.service';

describe('JobidService', () => {
  let service: JobidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
