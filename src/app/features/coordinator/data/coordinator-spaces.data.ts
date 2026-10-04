export type SpaceStatus =
  | 'Disponível'
  | 'Indisponível'
  | 'Pendente';

export interface CoordinatorSpace {
  name: string;
  description: string;
  floor: string;
  capacity: number;
  type: string;
  status: SpaceStatus;
}

export const coordinatorSpaces: CoordinatorSpace[] = [
  {
    name: 'Sala 201 - Aula Magna',
    description: 'Bloco principal • Auditório central',
    floor: '2º',
    capacity: 120,
    type: 'Sala de aula',
    status: 'Disponível',
  },
  {
    name: 'Lab. 304 - Informática',
    description: 'Bloco B • Rede e desenvolvimento',
    floor: '3º',
    capacity: 32,
    type: 'Informática',
    status: 'Disponível',
  },
  {
    name: 'Lab. 205 - Mecânica',
    description: 'Bloco B • Oficina e prototipagem',
    floor: '2º',
    capacity: 24,
    type: 'Engenharia',
    status: 'Indisponível',
  },
  {
    name: 'Lab. 402 - Maker',
    description: 'Bloco C • Prototipagem e impressão 3D',
    floor: '4º',
    capacity: 18,
    type: 'Maker',
    status: 'Pendente',
  },
  {
    name: 'Sala 101 - Reuniões',
    description: 'Bloco A • Área administrativa',
    floor: 'Térreo',
    capacity: 12,
    type: 'Sala de aula',
    status: 'Disponível',
  },
  {
    name: 'Lab. 106 - Química',
    description: 'Bloco B • Bancadas e equipamentos',
    floor: '1º',
    capacity: 28,
    type: 'Laboratório',
    status: 'Disponível',
  },
  {
    name: 'Lab. 307 - Automação',
    description: 'Bloco B • Controle e robótica',
    floor: '3º',
    capacity: 16,
    type: 'Engenharia',
    status: 'Indisponível',
  },
];
