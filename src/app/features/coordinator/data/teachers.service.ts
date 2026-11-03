import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import { API_BASE_URL } from '../../../shared/api.config';
import {
  CoordinatorTeacher,
  TeacherAvailabilityStatus,
  TeacherShift,
  TeacherStatus,
} from './coordinator-teachers.data';

/* Professor como a API retorna */
export interface TeacherApi {
  id: number;
  nome: string;
  email: string;
  cidade: string;
  status: TeacherStatus;
  createdAt: string;
  updatedAt: string;
}

/* Resposta paginada da API */
export interface TeacherPageApi {
  content: TeacherApi[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

/* Resposta já normalizada para a tabela do coordenador */
export interface TeacherPage {
  content: CoordinatorTeacher[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

/* A API ainda não retorna curso, disciplina, carga e turnos.
   Os valores abaixo são genéricos e determinísticos por professor,
   apenas para manter as colunas da tabela preenchidas. */
const COURSES = [
  { course: 'ADS', subjects: 'Estrutura de Dados, Banco de Dados' },
  { course: 'ADS', subjects: 'Programação Web, Algoritmos' },
  { course: 'Gestão Empresarial', subjects: 'Finanças, Marketing' },
  { course: 'Logística', subjects: 'Cadeia de Suprimentos, Logística' },
  { course: 'ADS', subjects: 'Redes, Segurança da Informação' },
];

const SHIFTS: TeacherShift[][] = [
  ['Manhã', 'Noite'],
  ['Manhã', 'Tarde'],
  ['Tarde', 'Noite'],
  ['Noite'],
  ['Manhã'],
];

/* A API ainda não retorna o andamento da disponibilidade.
   O status é determinístico por professor para manter o fluxo visível. */
const AVAILABILITY_STATUSES: TeacherAvailabilityStatus[] = [
  'Pendente',
  'Pendente',
  'Aprovada',
  'Aguardando coordenador',
  'Aprovada',
  'Em revisão',
];

@Injectable({ providedIn: 'root' })
export class TeachersService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${API_BASE_URL}/professores`;

  getTeachers(): Observable<TeacherPage> {
    return this.http
      .get<TeacherPageApi>(this.apiUrl)
      .pipe(map((response) => this.toPage(response)));
  }

  private toPage(response: TeacherPageApi): TeacherPage {
    return {
      content: response.content.map((teacher) => this.toTeacher(teacher)),
      page: response.page,
      size: response.size,
      totalElements: response.totalElements,
      totalPages: response.totalPages,
    };
  }

  private toTeacher(teacher: TeacherApi): CoordinatorTeacher {
    const course = COURSES[(teacher.id - 1) % COURSES.length];
    const shifts = SHIFTS[(teacher.id - 1) % SHIFTS.length];

    const contractedHours = 20 + (teacher.id % 3) * 4;
    const assignedHours = 4 + ((teacher.id * 5) % (contractedHours + 4));

    return {
      id: teacher.id,
      name: teacher.nome,
      registration: `2026${String(teacher.id).padStart(5, '0')}`,
      email: teacher.email,
      city: teacher.cidade,
      course: course.course,
      subjects: course.subjects,
      assignedHours,
      contractedHours,
      shifts,
      status: teacher.status,
      availabilityStatus:
        AVAILABILITY_STATUSES[
          (teacher.id - 1) % AVAILABILITY_STATUSES.length
        ],
    };
  }
}
