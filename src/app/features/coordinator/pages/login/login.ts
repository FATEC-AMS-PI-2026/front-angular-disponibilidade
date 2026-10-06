import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { LucideLogIn } from '@lucide/angular';

@Component({
  selector: 'app-coordinator-login',
  imports: [
    RouterLink,
    NgOptimizedImage,
    LucideLogIn,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class CoordinatorLoginComponent {}
