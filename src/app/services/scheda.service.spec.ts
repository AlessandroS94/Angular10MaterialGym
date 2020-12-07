import { TestBed } from '@angular/core/testing';

import { SchedaService } from './scheda.service';

describe('SchedaService', () => {
    let service: SchedaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SchedaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
