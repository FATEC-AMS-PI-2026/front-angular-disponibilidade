import { Component } from '@angular/core';
import { LucideCalendarDays, LucideCheck, LucideLockKeyhole, LucideGlobe } from '@lucide/angular';

type ScheduleStep = {
  title: string;
  subtitle: string;
  status: 'done' | 'current' | 'upcoming';
  icon: 'check' | 'lock' | 'globe';
};

@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [LucideCalendarDays, LucideCheck, LucideLockKeyhole, LucideGlobe],
  templateUrl: './cronograma.html',
  styleUrl: './cronograma.scss',
})
export class CronogramaComponent {
  protected readonly steps: ScheduleStep[] = [
    { title: 'Abertura de disponibilidades', subtitle: '01/01 a 20/01', status: 'done', icon: 'check' },
    { title: 'Montagem e alocação de salas', subtitle: '21/01 a 25/01', status: 'current', icon: 'check' },
    { title: 'Validação', subtitle: 'Prazo limite: 30/01', status: 'upcoming', icon: 'lock' },
    { title: 'Publicação aos Alunos no SIGA', subtitle: 'Início das Aulas: 01/02/2026', status: 'upcoming', icon: 'globe' },
  ];
}
