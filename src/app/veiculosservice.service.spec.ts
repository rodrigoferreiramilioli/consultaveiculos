import { TestBed } from '@angular/core/testing';

import { VeiculosserviceService } from './veiculosservice.service';

describe('VeiculosserviceService', () => {
  let service: VeiculosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
