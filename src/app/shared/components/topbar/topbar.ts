import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { LucideBell, LucideSearch } from '@lucide/angular';

@Component({
  selector: 'app-topbar',
  imports: [LucideBell, LucideSearch],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class TopbarComponent {
  private readonly router = inject(Router);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter(
        (event): event is NavigationEnd =>
          event instanceof NavigationEnd,
      ),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly breadcrumb = computed(() =>
    this.resolveBreadcrumb(this.currentUrl()),
  );

  private resolveBreadcrumb(url: string): string {
    if (url.startsWith('/professor/profile')) {
      return 'Perfil';
    }

    if (url.startsWith('/professor/availability/edit')) {
      return 'Disponibilidade / Editar';
    }

    if (url.startsWith('/professor/availability')) {
      return 'Disponibilidade';
    }

    if (/^\/coordinator\/teachers\/[^/]+\/schedule/.test(url)) {
      return 'Disponibilidade / Grade';
    }

    if (url.startsWith('/coordinator/teachers')) {
      return 'Disponibilidade';
    }

    if (url.startsWith('/coordinator/rooms')) {
      return 'Salas';
    }

    if (url.startsWith('/coordinator/home')) {
      return 'Início';
    }

    return 'GINI';
  }
}
