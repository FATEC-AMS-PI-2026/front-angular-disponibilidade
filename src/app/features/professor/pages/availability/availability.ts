import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  LucideBuilding2,
  LucideCalendarDays,
  LucidePencil,
  LucideUserRound,
} from '@lucide/angular';

import {
  AvailabilityStatus,
  professorAvailability,
} from '../../data/professor-availability.data';

@Component({
  selector: 'app-availability',
  imports: [
    RouterLink,
    LucideBuilding2,
    LucideCalendarDays,
    LucidePencil,
    LucideUserRound,
  ],
  templateUrl: './availability.html',
  styleUrl: './availability.scss',
})
export class AvailabilityComponent {

  protected readonly availability = professorAvailability;

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
}
