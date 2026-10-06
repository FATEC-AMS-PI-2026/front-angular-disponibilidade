import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LucideDownload, LucidePencil, LucidePlus } from '@lucide/angular';

import { RoomPage, RoomsService } from '../../data/rooms.service';

@Component({
  selector: 'app-rooms',
  imports: [
    LucideDownload,
    LucidePencil,
    LucidePlus,
  ],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class RoomsComponent {
  private readonly roomsService = inject(RoomsService);

  private readonly emptyPage: RoomPage = {
    content: [],
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
  };

  /* Converte o Observable do serviço em um signal, para o
     template ler como qualquer outro estado do componente.
     Enquanto a API não responde, vale o emptyPage. */
  protected readonly roomsResponse = toSignal(this.roomsService.getRooms(), {
    requireSync: false,
    initialValue: this.emptyPage,
  });
}
