import { TestBed } from '@angular/core/testing';

import { BusinessPlansService } from './business-plans.service';

describe('BusinessPlansService', () => {
  let service: BusinessPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
