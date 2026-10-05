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
        loadComponent: () => import('./features/professor/pages/profile/profile').then(component => component.ProfileComponent),
      },
      {
        path: 'availability',
        loadComponent: () => import('./features/professor/pages/availability/availability').then(component => component.AvailabilityComponent),
      },
      {
        path: 'availability/edit',
        loadComponent: () => import('./features/professor/pages/availability-edit/availability-edit').then(component => component.AvailabilityEditComponent),
      },
    ],
  },
  {
    path: 'coordinator',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'teachers',
      },
      {
        path: 'spaces',
        loadComponent: () => import('./features/coordinator/pages/spaces/spaces').then(component => component.SpacesComponent),
      },
      {
        path: 'teachers',
        loadComponent: () => import('./features/coordinator/pages/teachers-availability/teachers-availability').then(component => component.TeachersAvailabilityComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'professor/profile',
  },
];
