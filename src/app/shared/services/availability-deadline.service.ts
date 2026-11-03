import { Injectable } from '@angular/core';

export interface AvailabilityDeadline {
  date: string;
  label: string;
}

@Injectable({ providedIn: 'root' })
export class AvailabilityDeadlineService {
  readonly deadline: AvailabilityDeadline = {
    date: '2026-11-30',
    label: '30 de novembro de 2026',
  };
}
