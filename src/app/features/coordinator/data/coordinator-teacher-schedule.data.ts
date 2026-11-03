import { TeacherShift } from './coordinator-teachers.data';

export type CoordinatorSlotStatus =
  | 'Disponível'
  | 'Indisponível'
  | 'Negociável';

export interface CoordinatorScheduleSlot {
  id: string;
  shift: TeacherShift;
  startTime: string;
  endTime: string;
  status: CoordinatorSlotStatus;
}

export interface CoordinatorScheduleDay {
  day: string;
  slots: CoordinatorScheduleSlot[];
}

const DAYS = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

const SHIFT_TIMES: Record<
  TeacherShift,
  { startTime: string; endTime: string }[]
> = {
  Manhã: [
    { startTime: '08:00', endTime: '09:20' },
    { startTime: '09:30', endTime: '10:50' },
    { startTime: '11:00', endTime: '12:00' },
  ],
  Tarde: [
    { startTime: '13:00', endTime: '14:40' },
    { startTime: '14:50', endTime: '16:30' },
    { startTime: '16:40', endTime: '18:00' },
  ],
  Noite: [
    { startTime: '19:00', endTime: '20:00' },
    { startTime: '20:10', endTime: '21:10' },
    { startTime: '21:20', endTime: '22:00' },
  ],
};

const DEFAULT_SHIFTS: TeacherShift[] = ['Tarde'];

const STATUS_ORDER: CoordinatorSlotStatus[] = [
  'Disponível',
  'Negociável',
  'Indisponível',
];

const BASE_STATUSES: CoordinatorSlotStatus[][] = [
  ['Indisponível', 'Indisponível', 'Indisponível'],
  ['Disponível', 'Disponível', 'Disponível'],
  ['Indisponível', 'Disponível', 'Indisponível'],
  ['Disponível', 'Negociável', 'Disponível'],
  ['Indisponível', 'Indisponível', 'Disponível'],
  ['Negociável', 'Disponível', 'Indisponível'],
  ['Negociável', 'Indisponível', 'Indisponível'],
];

export function teacherSchedule(
  teacherId: number,
  shifts: TeacherShift[] = DEFAULT_SHIFTS,
): CoordinatorScheduleDay[] {
  const times = (shifts.length ? shifts : DEFAULT_SHIFTS).flatMap((shift) =>
    SHIFT_TIMES[shift].map((time) => ({ ...time, shift })),
  );

  return DAYS.map((day, dayIndex) => {
    const baseStatuses =
      BASE_STATUSES[(dayIndex + teacherId) % BASE_STATUSES.length];

    return {
      day,
      slots: times.map((time, slotIndex) => ({
        id: `${day.toLowerCase()}-${time.startTime}`,
        ...time,
        status: shiftStatus(
          baseStatuses[slotIndex % baseStatuses.length],
          teacherId,
        ),
      })),
    };
  });
}

function shiftStatus(
  status: CoordinatorSlotStatus,
  teacherId: number,
): CoordinatorSlotStatus {
  const index = STATUS_ORDER.indexOf(status);

  return STATUS_ORDER[(index + teacherId) % STATUS_ORDER.length];
}
