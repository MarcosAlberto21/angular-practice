import { TestBed } from '@angular/core/testing';

import { DbzService } from './first-service.service';

describe('FirstServiceService', () => {
  let service: DbzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
