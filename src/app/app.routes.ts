import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'professor/profile',
  },
  {
    path: 'professor',
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/professor/pages/profile/profile')
            .then(component => component.ProfileComponent),
      },
      {
        path: 'availability',
        loadComponent: () =>
          import('./features/professor/pages/availability/availability')
            .then(component => component.AvailabilityComponent),
      },
      {
        path: 'availability/edit',
        loadComponent: () =>
          import('./features/professor/pages/availability-edit/availability-edit')
            .then(component => component.AvailabilityEditComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'professor/profile',
  },
];
