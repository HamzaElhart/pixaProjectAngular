import { TestBed } from '@angular/core/testing';

import { PixaDataService } from './pixa-data.service';

describe('PixaDataService', () => {
  let service: PixaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
