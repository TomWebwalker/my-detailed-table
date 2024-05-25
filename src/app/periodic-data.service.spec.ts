import { TestBed } from '@angular/core/testing';

import { PeriodicDataService } from './periodic-data.service';

describe('PeriodicDataService', () => {
  let service: PeriodicDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
