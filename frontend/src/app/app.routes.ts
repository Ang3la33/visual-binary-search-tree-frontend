import { Routes } from '@angular/router';
import { InputNumbersComponent } from './components/input-numbers/input-numbers.component';

export const routes: Routes = [
  { path: '', redirectTo: 'enter-numbers', pathMatch: 'full' },
  { path: 'enter-numbers', component: InputNumbersComponent },
  {
    path: 'tree-visual',
    loadComponent: () =>
      import('./components/tree-visual/tree-visual.component').then(
        (m) => m.TreeVisualComponent
      ),
  },
  {
    path: 'previous-trees',
    loadComponent: () =>
      import('./components/previous-trees/previous-trees.component').then(
        (m) => m.PreviousTreesComponent
      ),
  }
];

