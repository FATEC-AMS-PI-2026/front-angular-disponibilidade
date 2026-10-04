import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersAvailability } from './teachers-availability';

describe('TeachersAvailability', () => {
  let component: TeachersAvailability;
  let fixture: ComponentFixture<TeachersAvailability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersAvailability],
    }).compileComponents();

    fixture = TestBed.createComponent(TeachersAvailability);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
