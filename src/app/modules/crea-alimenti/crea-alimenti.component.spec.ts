import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaAlimentiComponent } from './crea-alimenti.component';

describe('CreaAlimentiComponent', () => {
  let component: CreaAlimentiComponent;
  let fixture: ComponentFixture<CreaAlimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaAlimentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaAlimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
