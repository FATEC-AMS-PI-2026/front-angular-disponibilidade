import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideCalendarDays,
  LucideLogOut,
  LucideSettings,
  LucideUserRound,
} from '@lucide/angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideUserRound,
    LucideCalendarDays,
    LucideLogOut,
    LucideSettings,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent { }
