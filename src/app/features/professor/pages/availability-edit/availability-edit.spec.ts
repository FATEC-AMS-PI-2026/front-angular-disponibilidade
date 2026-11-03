import { ComponentFixture, TestBed } from '@angular/core/testing';

import { professorAvailabilityEdit } from '../../data/professor-availability-edit.data';
import { professorShifts } from '../../data/professor-shifts.data';
import { AvailabilityEditComponent } from './availability-edit';

describe('AvailabilityEdit', () => {
  let component: AvailabilityEditComponent;
  let fixture: ComponentFixture<AvailabilityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvailabilityEditComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose all three periods with defined availability statuses', () => {
    expect(professorShifts).toEqual(['Manhã', 'Tarde', 'Noite']);

    for (const day of professorAvailabilityEdit) {
      expect(day.slots).toHaveLength(9);
      expect(day.slots.every((slot) => slot.status !== undefined)).toBe(true);
    }
  });
});
