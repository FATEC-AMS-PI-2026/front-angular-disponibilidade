import { Component } from '@angular/core';
import { LucideDownload, LucidePencil, LucidePlus } from '@lucide/angular';

import {
  CoordinatorSpace,
  coordinatorSpaces,
} from '../../data/coordinator-spaces.data';

@Component({
  selector: 'app-spaces',
  imports: [
    LucideDownload,
    LucidePencil,
    LucidePlus,
  ],
  templateUrl: './spaces.html',
  styleUrl: './spaces.scss',
})
export class SpacesComponent {
  protected readonly spaces: CoordinatorSpace[] = coordinatorSpaces;
}
