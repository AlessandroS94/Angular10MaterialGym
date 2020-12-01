import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentiComponent } from './alimenti.component';

describe('AlimentiComponent', () => {
  let component: AlimentiComponent;
  let fixture: ComponentFixture<AlimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
