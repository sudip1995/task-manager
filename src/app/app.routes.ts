import {Routes} from '@angular/router';
import {TaskManagerContentComponent} from '../modules/task-manager/components/task-manager-content/task-manager-content.component';
import {BoardComponent} from '../modules/task-manager/components/board/board.component';
import {HomeComponent} from '../modules/task-manager/components/home/home.component';

export const appRoutes: Routes = [
  {
    path : '',
    component: HomeComponent
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
