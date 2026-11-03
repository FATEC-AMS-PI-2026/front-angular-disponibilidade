export type TeacherStatus =
  | 'ATIVO'
  | 'INATIVO';

export type TeacherShift =
  | 'Manhã'
  | 'Tarde'
  | 'Noite';

export type TeacherAvailabilityStatus =
  | 'Pendente'
  | 'Em revisão'
  | 'Aguardando coordenador'
  | 'Aprovada';

export interface CoordinatorTeacher {
  id: number;
  name: string;
  registration: string;
  email: string;
  city: string;
  photo?: string;
  course: string;
  subjects: string;
  assignedHours: number;
  contractedHours: number;
  shifts: TeacherShift[];
  status: TeacherStatus;
  availabilityStatus: TeacherAvailabilityStatus;
}
