import { Component } from '@angular/core';
import {
  LucideDownload,
  LucideFilter,
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

@Component({
  selector: 'app-profile',
  imports: [
    LucideUserRound,
    LucidePencil,
    LucideFilter,
    LucideDownload,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent {
  protected readonly profile: ProfessorProfile = professorProfile;
  protected readonly weekDays = weekDays;
  protected readonly schedulePeriods = schedulePeriods;
  protected readonly scheduleClasses: ScheduleClass[] = scheduleClasses;

  protected getClass(day: string, startTime: string, endTime: string): ScheduleClass | undefined {
    return this.scheduleClasses.find(
      scheduleClass =>
        scheduleClass.day === day &&
        scheduleClass.startTime === startTime &&
        scheduleClass.endTime === endTime,
    );
  }
}
