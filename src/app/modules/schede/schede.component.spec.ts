import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedeComponent } from './schede.component';

describe('SchedeComponent', () => {
  let component: SchedeComponent;
  let fixture: ComponentFixture<SchedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
