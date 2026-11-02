import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

  dashboard = {
    docentesAtivos: 28,
    disponibilidadesPreenchidas: 26,
    totalDocentes: 28,

    conflitosPendentes: 3,
    conflitos: [
      'Conflito de sala',
      'Conflito de interjornada',
      'Conflito de carga horária'
    ],

    gradesFinalizadas: 4,
    totalGrades: 6,
    dataPublicacao: '30/06/2026'
  };

}