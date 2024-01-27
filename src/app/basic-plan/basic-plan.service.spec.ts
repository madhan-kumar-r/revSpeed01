import { TestBed } from '@angular/core/testing';

import { BasicPlanService } from './basic-plan.service';

describe('BasicPlanService', () => {
  let service: BasicPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
