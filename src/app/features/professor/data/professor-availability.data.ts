export type AvailabilityStatus =
  | 'Disponível'
  | 'Indisponível'
  | 'Negociável';

export interface AvailabilitySlot {
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
  scheduleStatus: 'Aprovada' | 'Pendente' | 'Rejeitada';
  days: AvailabilityDay[];
}

export const professorAvailability: ProfessorAvailability = {
  semester: 'AMS',
  coordinator: 'Tadeu Maffei',
  scheduleStatus: 'Aprovada',

  days: [
    {
      day: 'Terça-feira',
      slots: [
        {
          startTime: '15:00',
          endTime: '16:50',
          status: 'Disponível',
        },
        {
          startTime: '17:00',
          endTime: '18:40',
          status: 'Disponível',
        },
      ],
    },
    {
      day: 'Quinta-feira',
      slots: [
        {
          startTime: '15:00',
          endTime: '16:50',
          status: 'Disponível',
        },
      ],
    },
    {
      day: 'Sexta-feira',
      slots: [
        {
          startTime: '15:00',
          endTime: '16:50',
          status: 'Negociável',
        },
      ],
    },
    {
      day: 'Sábado',
      slots: [
        {
          startTime: '13:20',
          endTime: '14:50',
          status: 'Negociável',
        },
      ],
    },
  ],
};
