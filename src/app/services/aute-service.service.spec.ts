import { TestBed } from '@angular/core/testing';

import { AuteServiceService } from './aute-service.service';

describe('AuteServiceService', () => {
  let service: AuteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
