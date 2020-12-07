import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaSchedaComponent } from './crea-scheda.component';

describe('CreaSchedaComponent', () => {
  let component: CreaSchedaComponent;
  let fixture: ComponentFixture<CreaSchedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaSchedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaSchedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
