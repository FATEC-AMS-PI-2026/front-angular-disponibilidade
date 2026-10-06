import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import {
  LucideLogIn,
  LucideUser,
  LucideChevronRight,
  LucideUserShield,
} from '@lucide/angular';

@Component({
  selector: 'app-profile-select',
  imports: [
    RouterLink,
    NgOptimizedImage,
    LucideLogIn,
    LucideUser,
    LucideUserShield,
    LucideChevronRight,
  ],
  templateUrl: './profile-select.html',
  styleUrl: './profile-select.scss',
})
export class ProfileSelectComponent {}
