import { TestBed } from '@angular/core/testing';

import { CentralLoggerService } from './central-logger.service';

describe('CentralLoggerService', () => {
  let service: CentralLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
