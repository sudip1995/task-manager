import {Routes} from '@angular/router';
import {TaskManagerContentComponent} from '../modules/task-manager/components/task-manager-content/task-manager-content.component';
import {BoardComponent} from '../modules/task-manager/components/board/board.component';

export const appRoutes: Routes = [
  {
    path : '',
    component: TaskManagerContentComponent
  },
  {
    path: ':id',
    component: BoardComponent
  },
  {
    path      : '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
