import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import {
  LucideCalendarDays,
  LucideHome,
  LucideLogOut,
  LucideMapPin,
  LucideSettings,
} from '@lucide/angular';

@Component({
  selector: 'app-coordinator-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
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
