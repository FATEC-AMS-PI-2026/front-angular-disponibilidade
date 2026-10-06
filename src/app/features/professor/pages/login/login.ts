import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideLogIn } from '@lucide/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    LucideLogIn,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {}
