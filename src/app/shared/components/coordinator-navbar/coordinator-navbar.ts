import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  LucideCalendarDays,
  LucideHome,
  LucideLogOut,
  LucideMapPin,
  LucideSettings,
} from '@lucide/angular';

@Component({
  selector: 'app-coordinator-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideHome,
    LucideCalendarDays,
    LucideMapPin,
    LucideLogOut,
    LucideSettings,
  ],
  templateUrl: './coordinator-navbar.html',
  styleUrl: './coordinator-navbar.scss',
})
export class CoordinatorNavbarComponent { }
