import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'selecionar',
  },
    {
    path: 'selecionar',
    loadComponent: () => import('./features/selecionar/selecionar').then(component => component.SelecionarComponent),
  },
  {
    path: 'professor',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/professor/pages/login/login').then(component => component.LoginComponent),
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
        loadComponent: () => import('./features/coordinator/pages/login/login').then(component => component.LoginComponent),
      },
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
    redirectTo: 'selecionar',
  },
];
