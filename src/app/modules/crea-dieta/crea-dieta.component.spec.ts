import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaDietaComponent } from './crea-dieta.component';

describe('CreaDietaComponent', () => {
  let component: CreaDietaComponent;
  let fixture: ComponentFixture<CreaDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaDietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
