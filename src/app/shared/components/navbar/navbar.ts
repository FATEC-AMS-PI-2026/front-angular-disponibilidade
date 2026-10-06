import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import {
  LucideCalendarDays,
  LucideLogOut,
  LucideSettings,
  LucideUserRound,
} from '@lucide/angular';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    LucideUserRound,
    LucideCalendarDays,
    LucideLogOut,
    LucideSettings,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent { }
