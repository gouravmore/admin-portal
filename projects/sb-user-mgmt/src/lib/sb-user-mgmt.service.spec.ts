import { TestBed } from '@angular/core/testing';

import { SbUserMgmtService } from './sb-user-mgmt.service';

describe('SbUserMgmtService', () => {
  let service: SbUserMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbUserMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
