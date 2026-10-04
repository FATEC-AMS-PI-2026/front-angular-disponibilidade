import { Routes } from '@angular/router';
import { SpacesComponent } from './features/coordinator/pages/spaces/spaces';
import { TeachersAvailabilityComponent } from './features/coordinator/pages/teachers-availability/teachers-availability';

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
    path: 'coordinator',
    children: [
      {
        path: 'spaces',
        component: SpacesComponent,
      },
      {
        path: 'teachers',
        component: TeachersAvailabilityComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'professor/profile',
  },
];
