import { TestBed } from '@angular/core/testing';

import { AlimentiService } from './alimenti.service';

describe('AlimentiService', () => {
  let service: AlimentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
