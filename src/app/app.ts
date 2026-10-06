import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './shared/components/navbar/navbar';
import { TopbarComponent } from './shared/components/topbar/topbar';
import { CoordinatorNavbarComponent } from './shared/components/coordinator-navbar/coordinator-navbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    CoordinatorNavbarComponent,
    TopbarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  constructor(
    private readonly router: Router,
  ) { }

  protected get isCoordinator(): boolean {
    return this.router.url.startsWith('/coordinator');
  }
}
