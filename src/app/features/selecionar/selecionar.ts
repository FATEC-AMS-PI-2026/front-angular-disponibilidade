import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideLogIn,
  LucideUser,
  LucideUserRoundPlus,
  LucideChevronRight,
} from '@lucide/angular';

@Component({
  selector: 'app-selecionar',
  standalone: true,
  imports: [
    RouterLink,
    LucideLogIn,
    LucideUser,
    LucideUserRoundPlus,
    LucideChevronRight,
  ],
  templateUrl: './selecionar.html',
  styleUrl: './selecionar.scss',
})
export class SelecionarComponent {}
