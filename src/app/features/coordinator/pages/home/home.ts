import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowRight,
  LucideCalendarClock,
  LucideCheckCheck,
  LucideClipboardList,
  LucideUsers,
} from '@lucide/angular';
import { AvailabilityDeadlineService } from '../../../../shared/services/availability-deadline.service';

type PendingReviewStatus =
  | 'Pendente'
  | 'Aguardando coordenador';

interface PendingReview {
  teacherId: number;
  name: string;
  city: string;
  email: string;
  status: PendingReviewStatus;
  message?: string;
}

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    LucideArrowRight,
    LucideCalendarClock,
    LucideCheckCheck,
    LucideClipboardList,
    LucideUsers,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly deadline = inject(AvailabilityDeadlineService).deadline;

  protected readonly activeTeachers = 5;
  protected readonly totalTeachers = 7;
  protected readonly activePercent = Math.round(
    (this.activeTeachers / this.totalTeachers) * 100,
  );

  protected readonly approvedReviews = 2;
  protected readonly inNegotiation = 1;

  protected readonly pendingReviews: PendingReview[] = [
    {
      teacherId: 1,
      name: 'Carlos',
      city: 'Sorocaba',
      email: 'carlos@cps.sp.gov.br',
      status: 'Pendente',
    },
    {
      teacherId: 4,
      name: 'Mariana',
      city: 'Sorocaba',
      email: 'mariana@cps.sp.gov.br',
      status: 'Aguardando coordenador',
      message: 'Consigo ajustar terça-feira, mas preciso manter quinta às 17:00.',
    },
    {
      teacherId: 2,
      name: 'Roberto',
      city: 'Itu',
      email: 'roberto@cps.sp.gov.br',
      status: 'Pendente',
    },
  ];

  protected getReviewStatusClass(status: PendingReviewStatus): string {
    return status === 'Pendente'
      ? 'status-badge--pending'
      : 'status-badge--warning';
  }
}
