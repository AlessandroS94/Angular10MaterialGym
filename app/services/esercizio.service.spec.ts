import { TestBed } from '@angular/core/testing';

import { EsercizioService } from './esercizio.service';

describe('EsercizioService', () => {
  let service: EsercizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsercizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
