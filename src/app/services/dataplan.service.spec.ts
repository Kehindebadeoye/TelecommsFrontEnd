import { TestBed } from '@angular/core/testing';

import { DataplanService } from './dataplan.service';

describe('DataplanService', () => {
  let service: DataplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
