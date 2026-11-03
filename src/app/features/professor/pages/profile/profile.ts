import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  LucideDownload,
  LucidePencil,
  LucideUserRound,
} from '@lucide/angular';

import {
  ProfessorProfile,
  ScheduleClass,
  professorProfile,
  scheduleClasses,
  schedulePeriods,
  weekDays,
} from '../../data/professor-profile.data';
import { ProfessorShiftsService } from '../../data/professor-shifts.service';
import { ProfessorShift } from '../../data/professor-shifts.data';
import { currentSemester } from '../../data/professor-availability.data';

@Component({
  selector: 'app-profile',
  imports: [
    LucideUserRound,
    LucidePencil,
    LucideDownload,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private readonly shiftSelection = inject(ProfessorShiftsService);

  protected readonly profile: ProfessorProfile = professorProfile;
  protected readonly semester = currentSemester;
  protected readonly shifts = this.shiftSelection.selectedShifts;
  protected readonly activeShift = signal<ProfessorShift>('Manhã');
  protected readonly currentShift = computed(() => {
    const shifts = this.shifts();
    const activeShift = this.activeShift();

    return shifts.includes(activeShift)
      ? activeShift
      : shifts[0] ?? null;
  });
  protected readonly weekDays = weekDays;
  protected readonly schedulePeriods = schedulePeriods;
  protected readonly visiblePeriods = computed(() =>
    this.schedulePeriods.filter(
      (period) => period.shift === this.currentShift(),
    ),
  );
  protected readonly scheduleClasses: ScheduleClass[] = scheduleClasses;

  protected selectShift(shift: ProfessorShift): void {
    this.activeShift.set(shift);
  }

  protected getClass(day: string, startTime: string, endTime: string): ScheduleClass | undefined {
    return this.scheduleClasses.find(
      scheduleClass =>
        scheduleClass.day === day &&
        scheduleClass.startTime === startTime &&
        scheduleClass.endTime === endTime,
    );
  }
}
