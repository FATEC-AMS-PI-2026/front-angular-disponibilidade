export interface ProfessorProfile {
  name: string;
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
  startTime: string;
  endTime: string;
}

export const professorProfile: ProfessorProfile = {
  name: 'Walter Hartwell White',
  status: 'Ativo',
  disciplines: [
    'Gestão de Processos',
    'Projeto Integrador',
  ],
  courses: [
    'Análise e Desenvolvimento de Sistemas',
  ],
};

export const schedulePeriods: SchedulePeriod[] = [
  {
    startTime: '13:20',
    endTime: '14:50',
  },
  {
    startTime: '15:00',
    endTime: '16:50',
  },
  {
    startTime: '17:00',
    endTime: '18:40',
  },
];

export const scheduleClasses: ScheduleClass[] = [
  {
    day: 'Terça',
    startTime: '13:20',
    endTime: '14:50',
    code: 'ADS AMS 1',
    discipline: 'Projeto Integrador',
    location: 'Laboratório 02',
  },
  {
    day: 'Quinta',
    startTime: '13:20',
    endTime: '14:50',
    code: 'PG 01',
    discipline: 'Gestão de Processos',
    location: 'Laboratório 02',
  },
  {
    day: 'Sábado',
    startTime: '13:20',
    endTime: '14:50',
    code: 'PG 01',
    discipline: 'Gestão de Processos',
    location: 'Laboratório 02',
  },
  {
    day: 'Terça',
    startTime: '15:00',
    endTime: '16:50',
    code: 'ADS AMS 1',
    discipline: 'Projeto Integrador',
    location: 'Laboratório 02',
  },
  {
    day: 'Sexta',
    startTime: '15:00',
    endTime: '16:50',
    code: 'PG 01',
    discipline: 'Gestão de Processos',
    location: 'Laboratório 02',
  },
  {
    day: 'Terça',
    startTime: '17:00',
    endTime: '18:40',
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
