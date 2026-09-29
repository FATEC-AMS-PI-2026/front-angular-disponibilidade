import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
