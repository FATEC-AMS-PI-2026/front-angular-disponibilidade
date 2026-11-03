import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  LucideBuilding2,
  LucideCalendarClock,
  LucideCalendarDays,
  LucideCheckCheck,
  LucideClock3,
  LucidePencil,
  LucideSend,
  LucideUserRound,
} from '@lucide/angular';

import {
  AvailabilitySlot,
  AvailabilityStatus,
  currentSemester,
  previousProfessorAvailability,
  previousSemester,
  professorAvailability,
} from '../../data/professor-availability.data';
import { professorShifts } from '../../data/professor-shifts.data';
import { AvailabilityDeadlineService } from '../../../../shared/services/availability-deadline.service';

type ReviewStatus =
  | 'Aguardando professor'
  | 'Aguardando coordenador'
  | 'Aprovada';

interface ReviewMessage {
  author: 'Coordenador' | 'Professor';
  text: string;
  time: string;
}

@Component({
  selector: 'app-availability',
  imports: [
    RouterLink,
    LucideBuilding2,
    LucideCalendarClock,
    LucideCalendarDays,
    LucideCheckCheck,
    LucideClock3,
    LucidePencil,
    LucideSend,
    LucideUserRound,
  ],
  templateUrl: './availability.html',
  styleUrl: './availability.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityComponent {
  private readonly deadlineService = inject(AvailabilityDeadlineService);

  protected readonly deadline = this.deadlineService.deadline;

  protected readonly viewingPrevious = signal(false);
  protected readonly selectedShifts = professorShifts;
  protected readonly currentSemester = currentSemester;
  protected readonly previousSemester = previousSemester;
  protected readonly availability = computed(() =>
    this.viewingPrevious()
      ? previousProfessorAvailability
      : professorAvailability,
  );

  protected readonly visibleDays = computed(() => {
    const selectedShifts = this.selectedShifts;
    const days = this.availability().days;

    return days
      .map((day) => ({
        ...day,
        slots: day.slots.filter(
          (slot) =>
            selectedShifts.includes(slot.shift) &&
            slot.status !== 'Indisponível',
        ),
      }))
      .filter((day) => day.slots.length > 0);
  });

  protected readonly availableMinutes = computed(() =>
    this.visibleDays()
      .flatMap((day) => day.slots)
      .filter((slot) => slot.status === 'Disponível')
      .reduce((total, slot) => total + this.slotMinutes(slot), 0),
  );

  protected readonly availableHours = computed(() =>
    this.formatHours(this.availableMinutes()),
  );

  protected readonly negotiableCount = computed(() =>
    this.visibleDays()
      .flatMap((day) => day.slots)
      .filter((slot) => slot.status === 'Negociável').length,
  );

  protected readonly availableDays = computed(() => this.visibleDays().length);

  protected readonly reviewStatus = signal<ReviewStatus>('Aguardando professor');

  protected readonly messages = signal<ReviewMessage[]>([
    {
      author: 'Coordenador',
      text: 'Revisei sua disponibilidade. Consegue tornar sexta-feira, das 15:00 às 16:50, disponível? Hoje ela está marcada como negociável.',
      time: '02/11, 14:20',
    },
  ]);

  protected readonly reply = signal('');

  protected selectSemester(event: Event): void {
    this.viewingPrevious.set(
      (event.target as HTMLSelectElement).value === 'previous',
    );
  }

  protected getStatusClass(
    status: AvailabilityStatus,
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

  protected getReviewStatusClass(status: ReviewStatus): string {
    switch (status) {
      case 'Aprovada':
        return 'status-badge--available';

      case 'Aguardando coordenador':
      case 'Aguardando professor':
        return 'status-badge--pending';
    }
  }

  protected onReplyInput(event: Event): void {
    this.reply.set((event.target as HTMLTextAreaElement).value);
  }

  protected sendReply(): void {
    const reply = this.reply().trim();

    if (!reply) {
      return;
    }

    this.messages.update((messages) => [
      ...messages,
      {
        author: 'Professor',
        text: reply,
        time: 'agora',
      },
    ]);

    this.reviewStatus.set('Aguardando coordenador');
    this.reply.set('');
  }

  protected acceptRevision(): void {
    const reply = this.reply().trim();

    this.messages.update((messages) => [
      ...messages,
      {
        author: 'Professor',
        text:
          reply ||
          'Revisão aceita. Disponibilidade ajustada conforme a negociação.',
        time: 'agora',
      },
    ]);

    this.reviewStatus.set('Aprovada');
    this.reply.set('');
  }

  private slotMinutes(slot: AvailabilitySlot): number {
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
