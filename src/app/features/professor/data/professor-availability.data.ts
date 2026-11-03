import { ProfessorShift } from './professor-shifts.data';
import { professorTimeBlocks } from './professor-time-blocks.data';

const today = new Date();
const currentSemesterNumber = today.getMonth() < 6 ? 1 : 2;
const previousSemesterNumber = currentSemesterNumber === 1 ? 2 : 1;
const previousSemesterYear = currentSemesterNumber === 1
  ? today.getFullYear() - 1
  : today.getFullYear();

export const currentSemester = `${currentSemesterNumber}º semestre de ${today.getFullYear()}`;
export const previousSemester = `${previousSemesterNumber}º semestre de ${previousSemesterYear}`;

export type AvailabilityStatus =
  | 'Disponível'
  | 'Indisponível'
  | 'Negociável';

export interface AvailabilitySlot {
  shift: ProfessorShift;
  startTime: string;
  endTime: string;
  status: AvailabilityStatus;
}

export interface AvailabilityDay {
  day: string;
  slots: AvailabilitySlot[];
}

export interface ProfessorAvailability {
  semester: string;
  coordinator: string;
  days: AvailabilityDay[];
}

const WEEK_DAYS = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Domingo',
];

type DayStatuses = Record<string, Partial<Record<string, AvailabilityStatus>>>;

const STATUS_BY_DAY: DayStatuses = {
  'Segunda-feira': { '09:30': 'Negociável' },
  'Terça-feira': { '08:00': 'Disponível' },
  'Quarta-feira': { '13:00': 'Disponível' },
  'Quinta-feira': { '14:50': 'Disponível' },
  'Sexta-feira': { '19:00': 'Negociável' },
  'Sábado': { '20:10': 'Negociável' },
};

const PREVIOUS_STATUS_BY_DAY: DayStatuses = {
  'Segunda-feira': { '08:00': 'Disponível' },
  'Terça-feira': { '14:50': 'Negociável' },
  'Quarta-feira': { '19:00': 'Disponível' },
  'Quinta-feira': { '09:30': 'Disponível' },
  'Sexta-feira': { '13:00': 'Negociável' },
  'Sábado': { '11:00': 'Disponível' },
};

function createDays(statusByDay: DayStatuses): AvailabilityDay[] {
  return WEEK_DAYS.map((day) => {
    const statuses = statusByDay[day];

    return {
      day,
      slots: statuses
        ? professorTimeBlocks.map((time) => ({
          shift: time.shift,
          startTime: time.startTime,
          endTime: time.endTime,
          status: statuses[time.startTime] ?? 'Indisponível',
        }))
        : [],
    };
  });
}

export const professorAvailability: ProfessorAvailability = {
  semester: currentSemester,
  coordinator: 'Tadeu Maffei',
  days: createDays(STATUS_BY_DAY),
};

export const previousProfessorAvailability: ProfessorAvailability = {
  semester: previousSemester,
  coordinator: 'Tadeu Maffei',
  days: createDays(PREVIOUS_STATUS_BY_DAY),
};
