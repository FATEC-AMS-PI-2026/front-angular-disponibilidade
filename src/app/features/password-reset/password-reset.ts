import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { LucideKeyRound } from '@lucide/angular';

@Component({
  selector: 'app-password-reset',
  imports: [
    RouterLink,
    NgOptimizedImage,
    LucideKeyRound,
  ],
  templateUrl: './password-reset.html',
  styleUrl: './password-reset.scss',
})
export class PasswordResetComponent {}
