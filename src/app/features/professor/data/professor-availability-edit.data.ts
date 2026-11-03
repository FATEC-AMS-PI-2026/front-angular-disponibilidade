import { ProfessorShift } from './professor-shifts.data';
import { professorTimeBlocks } from './professor-time-blocks.data';

export type AvailabilityEditStatus =
  | 'Disponível'
  | 'Indisponível'
  | 'Negociável';

export interface AvailabilityEditSlot {
  id: string;
  shift: ProfessorShift;
  startTime: string;
  endTime: string;
  status: AvailabilityEditStatus;
}

export interface AvailabilityEditDay {
  day: string;
  slots: AvailabilityEditSlot[];
}

const DAY_STATUSES: Record<
  string,
  Partial<Record<string, AvailabilityEditStatus>>
> = {
  Terça: { '08:00': 'Disponível' },
  Quinta: { '14:50': 'Disponível' },
  Sexta: { '19:00': 'Negociável' },
};

export const professorAvailabilityEdit: AvailabilityEditDay[] =
  ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => ({
    day,
    slots: professorTimeBlocks.map((time) => ({
      id: `${slug(day)}-${time.startTime.replace(':', '')}`,
      shift: time.shift,
      startTime: time.startTime,
      endTime: time.endTime,
      status: DAY_STATUSES[day]?.[time.startTime] ?? 'Indisponível',
    })),
  }));

function slug(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
