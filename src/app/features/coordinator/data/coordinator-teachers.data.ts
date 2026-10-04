export type TeacherStatus =
  | 'Validado'
  | 'Restrita'
  | 'Pendente';

export type TeacherShift =
  | 'Manhã'
  | 'Tarde'
  | 'Noite';

export interface CoordinatorTeacher {
  name: string;
  registration: string;
  email: string;
  photo?: string;
  course: string;
  subjects: string;
  assignedHours: number;
  contractedHours: number;
  shifts: TeacherShift[];
  status: TeacherStatus;
}

export const coordinatorTeachers: CoordinatorTeacher[] = [
  {
    name: 'Prof. Dr. Marcos Vinicius de Toledo',
    registration: '202100492',
    email: 'marcos.toledo@fatec.sp.gov.br',
    course: 'ADS',
    subjects: 'Estrutura de Dados, BD',
    assignedHours: 32,
    contractedHours: 24,
    shifts: ['Manhã', 'Noite'],
    status: 'Validado',
  },
  {
    name: 'Prof. Me. Renata F. Albuquerque',
    registration: '201800115',
    email: 'renata.albuquerque@fatec.sp.gov.br',
    course: 'ADS / GE',
    subjects: 'Engenharia Software, Gestão',
    assignedHours: 22,
    contractedHours: 20,
    shifts: ['Manhã', 'Tarde'],
    status: 'Validado',
  },
  {
    name: 'Prof. Esp. Arthur M. Gouveia',
    registration: '201500874',
    email: 'arthur.gouveia@fatec.sp.gov.br',
    course: 'Logística',
    subjects: 'Cadeia Suprimentos, Log.',
    assignedHours: 14,
    contractedHours: 16,
    shifts: ['Noite'],
    status: 'Restrita',
  },
  {
    name: 'Prof. Dra. Camila Barbosa',
    registration: '202300088',
    email: 'camila.barbosa@fatec.sp.gov.br',
    course: 'Gestão Empresarial',
    subjects: 'Finanças, Marketing',
    assignedHours: 0,
    contractedHours: 12,
    shifts: [],
    status: 'Pendente',
  },
  {
    name: 'Prof. Me. Lucas Siqueira',
    registration: '202200331',
    email: 'lucas.siqueira@fatec.sp.gov.br',
    course: 'ADS',
    subjects: 'Redes, Segurança',
    assignedHours: 28,
    contractedHours: 20,
    shifts: ['Tarde', 'Noite'],
    status: 'Validado',
  },
  {
    name: 'Prof. Dra. Helena Prado',
    registration: '201100019',
    email: 'helena.prado@fatec.sp.gov.br',
    course: 'Logística',
    subjects: 'Pesquisa Operacional',
    assignedHours: 24,
    contractedHours: 24,
    shifts: ['Manhã', 'Noite'],
    status: 'Validado',
  },
  {
    name: 'Prof. Me. Rodrigo Paiva',
    registration: '202000542',
    email: 'rodrigo.paiva@fatec.sp.gov.br',
    course: 'ADS',
    subjects: 'Programação Web, Alg.',
    assignedHours: 0,
    contractedHours: 16,
    shifts: [],
    status: 'Pendente',
  },
];
