import { Component } from '@angular/core';
import { LucideDownload, LucidePencil, LucideUserX } from '@lucide/angular';

import {
  CoordinatorTeacher,
  coordinatorTeachers,
} from '../../data/coordinator-teachers.data';

type WorkloadLevel = 'empty' | 'low' | 'ok' | 'high';

@Component({
  selector: 'app-teachers-availability',
  standalone: true,
  imports: [
    LucideDownload,
    LucidePencil,
    LucideUserX,
  ],
  templateUrl: './teachers-availability.html',
  styleUrl: './teachers-availability.scss',
})
export class TeachersAvailabilityComponent {
  protected readonly teachers: CoordinatorTeacher[] = coordinatorTeachers;

  protected percent(teacher: CoordinatorTeacher): number {
    if (!teacher.contractedHours) {
      return 0;
    }

    return Math.round((teacher.assignedHours / teacher.contractedHours) * 100);
  }

  // 0% = vazio | < 100% = abaixo | 100-119% = ok | >= 120% = acima
  protected level(teacher: CoordinatorTeacher): WorkloadLevel {
    const percent = this.percent(teacher);

    if (percent === 0) {
      return 'empty';
    }

    if (percent < 100) {
      return 'low';
    }

    return percent < 120 ? 'ok' : 'high';
  }
}
