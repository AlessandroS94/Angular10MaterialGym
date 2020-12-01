import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaEsercizioComponent } from './crea-esercizio.component';

describe('CreaEsercizioComponent', () => {
  let component: CreaEsercizioComponent;
  let fixture: ComponentFixture<CreaEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaEsercizioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
