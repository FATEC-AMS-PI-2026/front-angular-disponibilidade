import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

/* * Tipo de sala (tipoSala) como a API retorna */
export interface RoomType {
  id: number;
  nome: string;
}

/* * Sala como a API retorna */
export interface Room {
  id: number;
  codigo: string;
  capacidade: number;
  tipoSala: RoomType;

  /* A API ainda não retorna estes campos - ficam aqui para
     as colunas da tabela permanecerem até a próxima atualização */
  andar?: string;
  status?: RoomStatus;
}

export type RoomStatus = 'Disponível' | 'Indisponível' | 'Pendente';

/* Resposta paginada da API */
export interface RoomPage {
  content: Room[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root', })
export class RoomsService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://gini-api.vercel.app/salas';

  getRooms(): Observable<RoomPage> {
    return this.http.get<RoomPage>(this.apiUrl);
  }
}
