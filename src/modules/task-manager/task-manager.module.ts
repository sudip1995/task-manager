import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerContentComponent } from './components/task-manager-content/task-manager-content.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [TaskManagerContentComponent, BoardComponent, CardComponent, ListComponent],
  exports: [
    TaskManagerContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskManagerModule { }
