import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { LucideArrowLeft, LucideLogIn } from '@lucide/angular';

@Component({
  selector: 'app-professor-login',
  imports: [
    RouterLink,
    NgOptimizedImage,
    LucideArrowLeft,
    LucideLogIn,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class ProfessorLoginComponent { }
