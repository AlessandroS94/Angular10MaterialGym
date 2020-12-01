import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieteComponent } from './diete.component';

describe('DieteComponent', () => {
  let component: DieteComponent;
  let fixture: ComponentFixture<DieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
