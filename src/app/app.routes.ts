import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile-select',
  },
  {
    path: 'profile-select',
    loadComponent: () => import('./features/profile-select/profile-select').then(component => component.ProfileSelectComponent),
  },
  {
    path: 'password-reset',
    loadComponent: () => import('./features/password-reset/password-reset').then(component => component.PasswordResetComponent),
  },
  {
    path: 'professor',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/professor/pages/login/login').then(component => component.ProfessorLoginComponent),
      },
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
        path: 'login',
        loadComponent: () => import('./features/coordinator/pages/login/login').then(component => component.CoordinatorLoginComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'teachers',
      },
      {
        path: 'rooms',
        loadComponent: () => import('./features/coordinator/pages/rooms/rooms').then(component => component.RoomsComponent),
      },
      {
        path: 'teachers',
        loadComponent: () => import('./features/coordinator/pages/teachers-availability/teachers-availability').then(component => component.TeachersAvailabilityComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'profile-select',
  },
];
