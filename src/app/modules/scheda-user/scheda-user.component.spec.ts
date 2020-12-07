import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaUserComponent } from './scheda-user.component';

describe('SchedaUserComponent', () => {
  let component: SchedaUserComponent;
  let fixture: ComponentFixture<SchedaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
