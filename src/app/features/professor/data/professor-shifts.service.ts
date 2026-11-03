import { Injectable, signal } from '@angular/core';

import { ProfessorShift, professorShifts } from './professor-shifts.data';

@Injectable({ providedIn: 'root' })
export class ProfessorShiftsService {
  readonly selectedShifts = signal([...professorShifts]);

  setAvailability(shift: ProfessorShift, available: boolean): void {
    this.selectedShifts.update((selected) =>
      professorShifts.filter((item) =>
        item === shift ? available : selected.includes(item),
      ),
    );
  }
}
