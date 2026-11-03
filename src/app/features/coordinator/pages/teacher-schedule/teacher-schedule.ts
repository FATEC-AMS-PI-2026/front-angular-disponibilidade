import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import {
  LucideArrowLeft,
  LucideBuilding2,
  LucideCalendarDays,
  LucideClock3,
  LucideSend,
  LucideUserRound,
} from '@lucide/angular';

import {
  teacherSchedule,
} from '../../data/coordinator-teacher-schedule.data';
import { TeacherPage, TeachersService } from '../../data/teachers.service';

type ReviewStatus = 'Pendente' | 'Aguardando professor';

interface ReviewMessage {
  author: 'Coordenador' | 'Professor';
  text: string;
  time: string;
}

@Component({
  selector: 'app-teacher-schedule',
  imports: [
    RouterLink,
    LucideArrowLeft,
    LucideBuilding2,
    LucideCalendarDays,
    LucideClock3,
    LucideSend,
    LucideUserRound,
  ],
  templateUrl: './teacher-schedule.html',
  styleUrl: './teacher-schedule.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherScheduleComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly teachersService = inject(TeachersService);

  private readonly teacherId = Number(
    this.route.snapshot.paramMap.get('id') ?? 0,
  );

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

  protected readonly teacher = computed(() =>
    this.teachersResponse().content.find(
      (teacher) => teacher.id === this.teacherId,
    ),
  );

  protected readonly teacherLabel = computed(() => {
    const teacher = this.teacher();

    if (!teacher) {
      return 'Docente';
    }

    return `${teacher.name} • ${teacher.city} • ${teacher.email}`;
  });

  protected readonly teacherShifts = computed(
    () => this.teacher()?.shifts ?? [],
  );

  protected readonly days = computed(() =>
    teacherSchedule(this.teacherId || 1, this.teacherShifts()),
  );

  protected readonly shiftSchedules = computed(() =>
    this.teacherShifts().map((shift) => ({
      shift,
      days: this.days().map((day) => ({
        ...day,
        slots: day.slots.filter((slot) => slot.shift === shift),
      })),
    })),
  );

  protected readonly reviewStatus = signal<ReviewStatus>('Pendente');

  protected readonly messages = signal<ReviewMessage[]>([]);

  protected readonly message = signal('');

  protected onMessageInput(event: Event): void {
    this.message.set((event.target as HTMLTextAreaElement).value);
  }

  protected sendForApproval(): void {
    const message = this.message().trim();

    if (!message) {
      return;
    }

    this.messages.update((messages) => [
      ...messages,
      {
        author: 'Coordenador',
        text: message,
        time: 'agora',
      },
    ]);

    this.reviewStatus.set('Aguardando professor');
    this.message.set('');
  }
}
