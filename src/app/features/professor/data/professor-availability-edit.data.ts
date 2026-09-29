export type AvailabilityEditStatus =
  | 'Disponível'
  | 'Indisponível'
  | 'Negociável';

export interface AvailabilityEditSlot {
  id: string;
  startTime: string;
  endTime: string;
  status: AvailabilityEditStatus;
}

export interface AvailabilityEditDay {
  day: string;
  slots: AvailabilityEditSlot[];
}

export const professorAvailabilityEdit: AvailabilityEditDay[] = [
  {
    day: 'Segunda',
    slots: [
      {
        id: 'segunda-1320',
        startTime: '13:20',
        endTime: '14:50',
        status: 'Indisponível',
      },
      {
        id: 'segunda-1500',
        startTime: '15:00',
        endTime: '16:50',
        status: 'Indisponível',
      },
      {
        id: 'segunda-1700',
        startTime: '17:00',
        endTime: '18:40',
        status: 'Indisponível',
      },
    ],
  },
  {
    day: 'Terça',
    slots: [
      {
        id: 'terca-1320',
        startTime: '13:20',
        endTime: '14:50',
        status: 'Disponível',
      },
      {
        id: 'terca-1500',
        startTime: '15:00',
        endTime: '16:50',
        status: 'Disponível',
      },
      {
        id: 'terca-1700',
        startTime: '17:00',
        endTime: '18:40',
        status: 'Disponível',
      },
    ],
  },
  {
    day: 'Quarta',
    slots: [
      {
        id: 'quarta-1320',
        startTime: '13:20',
        endTime: '14:50',
        status: 'Indisponível',
      },
      {
        id: 'quarta-1500',
        startTime: '15:00',
        endTime: '16:50',
        status: 'Indisponível',
      },
      {
        id: 'quarta-1700',
        startTime: '17:00',
        endTime: '18:40',
        status: 'Indisponível',
      },
    ],
  },
  {
    day: 'Quinta',
    slots: [
      {
        id: 'quinta-1320',
        startTime: '13:20',
        endTime: '14:50',
        status: 'Indisponível',
      },
      {
        id: 'quinta-1500',
        startTime: '15:00',
        endTime: '16:50',
        status: 'Disponível',
      },
      {
        id: 'quinta-1700',
        startTime: '17:00',
        endTime: '18:40',
        status: 'Indisponível',
      },
    ],
  },
  {
    day: 'Sexta',
    slots: [
      {
        id: 'sexta-1320',
        startTime: '13:20',
        endTime: '14:50',
        status: 'Indisponível',
      },
      {
        id: 'sexta-1500',
        startTime: '15:00',
        endTime: '16:50',
        status: 'Negociável',
      },
      {
        id: 'sexta-1700',
        startTime: '17:00',
        endTime: '18:40',
        status: 'Indisponível',
      },
    ],
  },
  {
    day: 'Sábado',
    slots: [
      {
        id: 'sabado-1320',
        startTime: '13:20',
        endTime: '14:50',
        status: 'Negociável',
      },
      {
        id: 'sabado-1500',
        startTime: '15:00',
        endTime: '16:50',
        status: 'Indisponível',
      },
      {
        id: 'sabado-1700',
        startTime: '17:00',
        endTime: '18:40',
        status: 'Indisponível',
      },
    ],
  },
  {
    day: 'Domingo',
    slots: [
      {
        id: 'domingo-1320',
        startTime: '13:20',
        endTime: '14:50',
        status: 'Indisponível',
      },
      {
        id: 'domingo-1500',
        startTime: '15:00',
        endTime: '16:50',
        status: 'Indisponível',
      },
      {
        id: 'domingo-1700',
        startTime: '17:00',
        endTime: '18:40',
        status: 'Indisponível',
      },
    ],
  },
];
