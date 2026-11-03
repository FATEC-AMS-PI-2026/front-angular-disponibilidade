import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  LucideCalendarClock,
  LucideCalendarDays,
  LucideDownload,
  LucideUserX,
} from '@lucide/angular';

import {
  CoordinatorTeacher,
  TeacherAvailabilityStatus,
} from '../../data/coordinator-teachers.data';
import { TeacherPage, TeachersService } from '../../data/teachers.service';
import { AvailabilityDeadlineService } from '../../../../shared/services/availability-deadline.service';

type WorkloadLevel = 'empty' | 'low' | 'ok' | 'high';

@Component({
  selector: 'app-teachers-availability',
  imports: [
    NgOptimizedImage,
    RouterLink,
    LucideCalendarClock,
    LucideCalendarDays,
    LucideDownload,
    LucideUserX,
  ],
  templateUrl: './teachers-availability.html',
  styleUrl: './teachers-availability.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeachersAvailabilityComponent {
  private readonly teachersService = inject(TeachersService);
  private readonly deadlineService = inject(AvailabilityDeadlineService);

  protected readonly deadline = this.deadlineService.deadline;

  private readonly emptyPage: TeacherPage = {
    content: [],
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
  };

  protected readonly teachersResponse = toSignal(
    this.teachersService.getTeachers(),
    {
      requireSync: false,
      initialValue: this.emptyPage,
    },
  );

  protected readonly courses = computed(() =>
    [...new Set(this.teachersResponse().content.map((teacher) => teacher.course))].sort(),
  );

  protected readonly teachers = computed(() => this.teachersResponse().content);

  protected getAvailabilityStatusClass(
    status: TeacherAvailabilityStatus,
  ): string {
    switch (status) {
      case 'Aprovada':
        return 'status-badge--available';

      case 'Pendente':
        return 'status-badge--pending';

      case 'Em revisão':
      case 'Aguardando coordenador':
        return 'status-badge--warning';
    }
  }

  protected percent(teacher: CoordinatorTeacher): number {
    if (!teacher.contractedHours) {
      return 0;
    }

    return Math.round((teacher.assignedHours / teacher.contractedHours) * 100);
  }

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
