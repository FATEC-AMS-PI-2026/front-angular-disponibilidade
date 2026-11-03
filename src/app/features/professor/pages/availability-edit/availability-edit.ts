import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  LucideArrowLeft,
  LucideBuilding2,
  LucideCalendarClock,
  LucideCheck,
  LucideSave,
  LucideUserRound,
} from '@lucide/angular';

import {
  AvailabilityEditDay,
  AvailabilityEditSlot,
  AvailabilityEditStatus,
  professorAvailabilityEdit,
} from '../../data/professor-availability-edit.data';
import { professorShifts } from '../../data/professor-shifts.data';
import { ProfessorShiftsService } from '../../data/professor-shifts.service';
import { AvailabilityDeadlineService } from '../../../../shared/services/availability-deadline.service';

const MAXIMUM_HOURS = 9;
const STATUSES: AvailabilityEditStatus[] = [
  'Indisponível',
  'Disponível',
  'Negociável',
];

@Component({
  selector: 'app-availability-edit',
  imports: [
    RouterLink,
    LucideArrowLeft,
    LucideBuilding2,
    LucideCalendarClock,
    LucideCheck,
    LucideSave,
    LucideUserRound,
  ],
  templateUrl: './availability-edit.html',
  styleUrl: './availability-edit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityEditComponent {
  private readonly deadlineService = inject(AvailabilityDeadlineService);
  private readonly shiftSelection = inject(ProfessorShiftsService);

  protected readonly deadline = this.deadlineService.deadline;

  protected readonly shifts = professorShifts;
  protected readonly selectedShifts = this.shiftSelection.selectedShifts;
  protected readonly days = signal<AvailabilityEditDay[]>(
    professorAvailabilityEdit.map((day) => ({
      ...day,
      slots: day.slots.map((slot) => ({ ...slot })),
    })),
  );

  protected readonly shiftSchedules = computed(() => this.selectedShifts().map((shift) => ({
    shift,
    days: this.days().map((day) => ({
      ...day,
      slots: day.slots.filter((slot) => slot.shift === shift),
    })),
  })));

  protected readonly maximumHours = MAXIMUM_HOURS;

  protected readonly availableMinutes = computed(() => this.days()
    .flatMap((day) => day.slots)
    .filter(
      (slot) =>
        this.selectedShifts().includes(slot.shift) &&
        slot.status === 'Disponível',
    )
    .reduce((total, slot) => total + this.slotMinutes(slot), 0));

  protected readonly availableHours = computed(() => this.formatHours(this.availableMinutes()));

  protected readonly availablePercent = computed(() =>
    Math.min(
      100,
      Math.round((this.availableMinutes() / (MAXIMUM_HOURS * 60)) * 100),
    ),
  );

  protected getStatusClass(
    status: AvailabilityEditStatus,
  ): string {

    switch (status) {
      case 'Disponível':
        return 'availability-slot--available';

      case 'Negociável':
        return 'availability-slot--negotiable';

      case 'Indisponível':
        return 'availability-slot--unavailable';
    }
  }

  protected changeStatus(slotId: string): void {
    this.days.update((days) => days.map((day) => ({
      ...day,
      slots: day.slots.map((slot) => {
        if (slot.id !== slotId) {
          return slot;
        }

        const nextIndex = (STATUSES.indexOf(slot.status) + 1) % STATUSES.length;
        return { ...slot, status: STATUSES[nextIndex] };
      }),
    })));
  }

  protected onShiftToggle(shift: (typeof professorShifts)[number], event: Event): void {
    this.shiftSelection.setAvailability(
      shift,
      (event.target as HTMLInputElement).checked,
    );
  }

  private slotMinutes(slot: AvailabilityEditSlot): number {
    const [startHour, startMinute] = slot.startTime.split(':').map(Number);
    const [endHour, endMinute] = slot.endTime.split(':').map(Number);

    return endHour * 60 + endMinute - (startHour * 60 + startMinute);
  }

  private formatHours(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return remainingMinutes
      ? `${hours}h${String(remainingMinutes).padStart(2, '0')}`
      : `${hours}h`;
  }
}
