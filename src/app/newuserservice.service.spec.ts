import { TestBed } from '@angular/core/testing';

import { NewuserserviceService } from './newuserservice.service';

describe('NewuserserviceService', () => {
  let service: NewuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
