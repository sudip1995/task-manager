import {Routes} from '@angular/router';
import {TaskManagerContentComponent} from '../modules/task-manager/components/task-manager-content/task-manager-content.component';

export const appRoutes: Routes = [
  {
    path : '',
    component: TaskManagerContentComponent
  },
  {
    path      : '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
