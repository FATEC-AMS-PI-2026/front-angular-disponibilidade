import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityComponent } from './availability';

describe('Availability', () => {
  let component: AvailabilityComponent;
  let fixture: ComponentFixture<AvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvailabilityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show available and negotiable slots without unavailable ones', () => {
    const slots: NodeListOf<HTMLElement> =
      fixture.nativeElement.querySelectorAll('.availability-slot');

    expect(slots.length).toBeGreaterThan(0);
    expect(fixture.nativeElement.textContent).not.toContain('Indisponível');
    expect(
      fixture.nativeElement.querySelector('.availability-slot--unavailable'),
    ).toBeNull();
  });
});
