import { ProfessorShift } from './professor-shifts.data';
import { professorTimeBlocks } from './professor-time-blocks.data';

export interface ProfessorProfile {
  name: string;
  email: string;
  registration: string;
  unit: string;
  city: string;
  status: 'Ativo' | 'Inativo';
  disciplines: string[];
  courses: string[];
}

export interface ScheduleClass {
  day: string;
  startTime: string;
  endTime: string;
  code: string;
  discipline: string;
  location: string;
}

export interface SchedulePeriod {
  shift: ProfessorShift;
  startTime: string;
  endTime: string;
}

export const professorProfile: ProfessorProfile = {
  name: 'Walter Hartwell White',
  email: 'walter.white@fatec.sp.gov.br',
  registration: '202600123',
  unit: 'Fatec Dom Amaury Castanho',
  city: 'Sorocaba',
  status: 'Ativo',
  disciplines: [
    'Gestão de Processos',
    'Projeto Integrador',
  ],
  courses: [
    'Análise e Desenvolvimento de Sistemas',
  ],
};

export const schedulePeriods: SchedulePeriod[] = professorTimeBlocks;

export const scheduleClasses: ScheduleClass[] = [
  {
    day: 'Terça',
    startTime: '13:00',
    endTime: '14:40',
    code: 'ADS AMS 1',
    discipline: 'Projeto Integrador',
    location: 'Laboratório 02',
  },
  {
    day: 'Quinta',
    startTime: '13:00',
    endTime: '14:40',
    code: 'PG 01',
    discipline: 'Gestão de Processos',
    location: 'Laboratório 02',
  },
  {
    day: 'Sábado',
    startTime: '13:00',
    endTime: '14:40',
    code: 'PG 01',
    discipline: 'Gestão de Processos',
    location: 'Laboratório 02',
  },
  {
    day: 'Terça',
    startTime: '14:50',
    endTime: '16:30',
    code: 'ADS AMS 1',
    discipline: 'Projeto Integrador',
    location: 'Laboratório 02',
  },
  {
    day: 'Sexta',
    startTime: '14:50',
    endTime: '16:30',
    code: 'PG 01',
    discipline: 'Gestão de Processos',
    location: 'Laboratório 02',
  },
  {
    day: 'Terça',
    startTime: '16:40',
    endTime: '18:00',
    code: 'PG 01',
    discipline: 'Gestão de Processos',
    location: 'Laboratório 02',
  },
];

export const weekDays = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];
