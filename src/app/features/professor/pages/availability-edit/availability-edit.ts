import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import {
  LucideArrowLeft,
  LucideBuilding2,
  LucideCalendarClock,
  LucideCheck,
  LucideClock3,
  LucideSave,
  LucideUserRound,
} from '@lucide/angular';

import {
  AvailabilityEditDay,
  AvailabilityEditStatus,
  professorAvailabilityEdit,
} from '../../data/professor-availability-edit.data';

@Component({
  selector: 'app-availability-edit',
  imports: [
    RouterLink,
    LucideArrowLeft,
    LucideBuilding2,
    LucideCalendarClock,
    LucideCheck,
    LucideClock3,
    LucideSave,
    LucideUserRound,
  ],
  templateUrl: './availability-edit.html',
  styleUrl: './availability-edit.scss',
})
export class AvailabilityEditComponent {

  protected readonly days: AvailabilityEditDay[] =
    professorAvailabilityEdit;

  constructor(
    private readonly router: Router,
  ) {}

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

  protected changeStatus(
    slot: AvailabilityEditDay['slots'][number],
  ): void {

    const statuses: AvailabilityEditStatus[] = [
      'Indisponível',
      'Disponível',
      'Negociável',
    ];

    const currentIndex = statuses.indexOf(slot.status);

    const nextIndex =
      (currentIndex + 1) % statuses.length;

    slot.status = statuses[nextIndex];
  }

  protected save(): void {
    this.router.navigate(['/professor/availability']);
  }
}
