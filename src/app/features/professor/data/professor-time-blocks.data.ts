import { ProfessorShift } from './professor-shifts.data';

export interface ProfessorTimeBlock {
  shift: ProfessorShift;
  startTime: string;
  endTime: string;
}

export const professorTimeBlocks: ProfessorTimeBlock[] = [
  {
    shift: 'Manhã',
    startTime: '08:00',
    endTime: '09:20',
  },
  {
    shift: 'Manhã',
    startTime: '09:30',
    endTime: '10:50',
  },
  {
    shift: 'Manhã',
    startTime: '11:00',
    endTime: '12:00',
  },
  {
    shift: 'Tarde',
    startTime: '13:00',
    endTime: '14:40',
  },
  {
    shift: 'Tarde',
    startTime: '14:50',
    endTime: '16:30',
  },
  {
    shift: 'Tarde',
    startTime: '16:40',
    endTime: '18:00',
  },
  {
    shift: 'Noite',
    startTime: '19:00',
    endTime: '20:00',
  },
  {
    shift: 'Noite',
    startTime: '20:10',
    endTime: '21:10',
  },
  {
    shift: 'Noite',
    startTime: '21:20',
    endTime: '22:00',
  },
];
