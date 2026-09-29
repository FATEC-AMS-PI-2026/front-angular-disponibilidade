import { Component } from '@angular/core';
import { LucideBell, LucideSearch } from '@lucide/angular';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [LucideBell, LucideSearch],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class TopbarComponent { }
