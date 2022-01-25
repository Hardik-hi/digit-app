import { TestBed } from '@angular/core/testing';

import { TimeHelperService } from './time-helper.service';

describe('TimeHelperService', () => {
  let service: TimeHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
