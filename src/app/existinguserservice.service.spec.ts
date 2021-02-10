import { TestBed } from '@angular/core/testing';

import { ExistinguserserviceService } from './existinguserservice.service';

describe('ExistinguserserviceService', () => {
  let service: ExistinguserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistinguserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
